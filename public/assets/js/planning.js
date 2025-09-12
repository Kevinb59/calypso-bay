// --- Helpers dates sûrs (évite les off-by-one/DST) ---
const MIN_NIGHTS = 6

function fromISODate(iso) {
  // "2025-10-01" -> Date locale à 12:00 (anti-DST)
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d, 12, 0, 0)
}

function startOfDay(d) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function toISO(d) {
  const x = startOfDay(d)
  const y = x.getFullYear()
  const m = String(x.getMonth() + 1).padStart(2, '0')
  const dd = String(x.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

// 🌐 Détection de langue
const page = window.location.pathname
let lang = 'fr'
if (page.includes('index-en')) lang = 'en'
else if (page.includes('index-de')) lang = 'de'

// 📅 Traductions mois + jours
const monthNamesByLang = {
  fr: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  de: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ]
}

const daysByLang = {
  fr: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
}

// 📄 Données de planning
const pricingCsvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwvUuLOZPWELzk4Kdc8uASTzdzLLU3D-QsvYl_O5hfoS7FUFmE0-fYbjqVcNJeiusv7mVAgfFmIpAj/pub?gid=852347305&single=true&output=csv'

const blockedPeriodsCsvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwvUuLOZPWELzk4Kdc8uASTzdzLLU3D-QsvYl_O5hfoS7FUFmE0-fYbjqVcNJeiusv7mVAgfFmIpAj/pub?gid=1564082532&single=true&output=csv'

let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()
let planningData = {}
let blockedPeriods = [] // [{ start: Date, end: Date, reason?: 'gap<min' }]
let endAllowedStartSet = new Set() // Set<YYYY-MM-DD> des débuts de bloc autorisés (gap ≥ MIN_NIGHTS)
let selectedStart = null
let selectedEnd = null

// 📥 Récupération des données de tarification
async function fetchPricingData() {
  const cacheBuster = Date.now()
  const res = await fetch(`${pricingCsvUrl}&v=${cacheBuster}`, {
    cache: 'no-store'
  })
  const text = await res.text()
  const rows = text
    .trim()
    .split('\n')
    .slice(1)
    .map((r) => r.split(','))

  planningData = {}
  rows.forEach(([rawDate, rawValue]) => {
    const cleanDate = rawDate.trim().replace(/^"|"$/g, '')
    // Normaliser les espaces multiples dans les dates
    const normalizedDate = cleanDate.replace(/\s+/g, ' ').toLowerCase()
    const cleanValue = rawValue?.trim().toLowerCase()
    planningData[normalizedDate] = cleanValue
  })
}

// 📥 Périodes bloquées depuis CAL_EXPORT (et gaps < 6 nuits) — parsing robuste
async function fetchBlockedPeriods() {
  const sep = blockedPeriodsCsvUrl.includes('?') ? '&' : '?'
  const res = await fetch(`${blockedPeriodsCsvUrl}${sep}v=${Date.now()}`, {
    cache: 'no-store'
  })
  const raw = await res.text()

  // 1) Normaliser (BOM, CRLF → LF), trim global
  const text = raw
    .replace(/^\uFEFF/, '')
    .replace(/\r\n?/g, '\n')
    .trim()

  // 2) Lignes non vides, on saute l'en-tête
  const lines = text.split('\n').filter(Boolean)
  if (!lines.length) {
    blockedPeriods = []
    endAllowedStartSet = new Set()
    return
  }
  const rows = lines.slice(1)

  // 3) Parser 2 colonnes "start,end" en coupant à la PREMIÈRE virgule
  const periodsRaw = []
  for (const line of rows) {
    const idx = line.indexOf(',')
    if (idx === -1) continue // ligne invalide
    const rawStart = line.slice(0, idx)
    const rawEnd = line.slice(idx + 1)

    // trim + déquote
    const s = rawStart.trim().replace(/^"|"$/g, '')
    const e = rawEnd.trim().replace(/^"|"$/g, '')
    if (!s || !e) continue

    const start = fromISODate(s)
    const end = fromISODate(e)
    if (isNaN(start) || isNaN(end) || start >= end) continue

    periodsRaw.push({ start, end }) // end EXCLU
  }

  // 4) Dédupliquer (au cas où) puis trier
  const key = (p) =>
    `${p.start.getFullYear()}-${String(p.start.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(p.start.getDate()).padStart(
      2,
      '0'
    )}|${p.end.getFullYear()}-${String(p.end.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(p.end.getDate()).padStart(2, '0')}`
  const map = new Map()
  for (const p of periodsRaw) map.set(key(p), p)
  const periods = Array.from(map.values()).sort((a, b) => a.start - b.start)

  // 5) Gaps < MIN_NIGHTS
  const gapBlocks = []
  for (let i = 1; i < periods.length; i++) {
    const prevEnd = startOfDay(periods[i - 1].end)
    const nextStart = startOfDay(periods[i].start)
    const nights = Math.round((nextStart - prevEnd) / 86400000)
    if (nights > 0 && nights < MIN_NIGHTS) {
      gapBlocks.push({
        start: new Date(periods[i - 1].end),
        end: new Date(periods[i].start),
        reason: 'gap<min'
      })
    }
  }

  // 6) Fusion finale (réels + gaps)
  blockedPeriods = periods.concat(gapBlocks)

  // 7) Start autorisés (gap >= MIN_NIGHTS)
  endAllowedStartSet = new Set()
  for (let i = 1; i < periods.length; i++) {
    const prevEnd = startOfDay(periods[i - 1].end)
    const nextStart = startOfDay(periods[i].start)
    const nights = Math.round((nextStart - prevEnd) / 86400000)
    if (nights >= MIN_NIGHTS) endAllowedStartSet.add(toISO(nextStart))
  }
}

// 📥 Récupération complète des données
async function fetchPlanning() {
  try {
    await Promise.all([fetchPricingData(), fetchBlockedPeriods()])
    renderCalendar(currentMonth, currentYear)
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error)
    // En cas d'erreur, on affiche quand même le calendrier avec les données existantes
    renderCalendar(currentMonth, currentYear)
  }
}

// 🔎 Jour bloqué si STRICTEMENT à l'intérieur d'une plage [start, end)
function isDateBlocked(date) {
  const d = startOfDay(date)
  return blockedPeriods.some(({ start, end }) => {
    const s = startOfDay(start)
    const e = startOfDay(end) // end exclu
    return d >= s && d < e // on bloque le jour de début de la plage (gap compris)
  })
}

// 🔄 Réinitialise la sélection
function resetSelection(keepCalendar = false) {
  selectedStart = null
  selectedEnd = null
  const banner = document.getElementById('mobile-banner')
  if (banner) banner.style.display = 'none'
  if (!keepCalendar) renderCalendar(currentMonth, currentYear)
}

// 📅 Gère clic sur date
function handleDateClick(dateObj, event) {
  // (utilise le MIN_NIGHTS global en haut du fichier)

  if (!selectedStart || (selectedStart && selectedEnd)) {
    selectedStart = dateObj
    selectedEnd = null
  } else if (dateObj < selectedStart) {
    selectedStart = dateObj
  } else if (dateObj.getTime() === selectedStart.getTime()) {
    resetSelection(true)
    return
  } else {
    // Vérifie que la plage contient uniquement des jours disponibles avec un tarif
    let current = new Date(selectedStart)
    let hasInvalid = false

    while (current < dateObj) {
      // Vérifier si la date est dans une période bloquée
      if (isDateBlocked(current)) {
        hasInvalid = true
        break
      }

      const key = current
        .toLocaleDateString('fr-FR', {
          weekday: 'short',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
        .toLowerCase()
        .replace(/\s+/g, ' ') // Normaliser les espaces multiples

      const value = planningData[key]
      if (!value || value === 'x' || isNaN(parseFloat(value))) {
        hasInvalid = true
        break
      }

      current.setDate(current.getDate() + 1)
    }

    const diffNights = Math.round(
      (dateObj - selectedStart) / (1000 * 60 * 60 * 24)
    )
    if (diffNights < MIN_NIGHTS) {
      const minEndDate = new Date(selectedStart)
      minEndDate.setDate(minEndDate.getDate() + MIN_NIGHTS)

      const minDateStr = minEndDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long'
      })

      // ✅ Texte avec date en gras (et soulignée si tu veux)
      showTooltip(
        `Minimum 6 nuits. Choisissez au moins jusqu’au <strong><u>${minDateStr}</u></strong>`,
        event.currentTarget
      )
      return
    }

    if (hasInvalid) {
      showTooltip(
        'Votre sélection contient un ou plusieurs jours non disponibles',
        event.currentTarget
      )
      resetSelection(true)
      return
    }

    selectedEnd = dateObj
  }

  renderCalendar(currentMonth, currentYear)
  if (selectedStart && selectedEnd) showBannerPanel()
}

// 🧱 Génère le calendrier
function renderCalendar(month, year) {
  const grid = document.getElementById('calendar-grid')
  const title = document.getElementById('calendar-title')
  const monthNames = monthNamesByLang[lang]
  const days = daysByLang[lang]

  title.textContent = `${monthNames[month]} ${year}`
  grid.innerHTML = ''

  days.forEach((jour) => {
    const label = document.createElement('div')
    label.className = 'calendar-label'
    label.textContent = jour
    grid.appendChild(label)
  })

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const offset = firstDay === 0 ? 6 : firstDay - 1
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < offset; i++)
    grid.appendChild(document.createElement('div'))

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div')
    cell.className = 'calendar-cell'
    const displayDate = new Date(year, month, day)
    displayDate.setHours(0, 0, 0, 0)

    const isToday = displayDate.getTime() === today.getTime()
    const isPast = displayDate < today

    const dayStr = displayDate
      .toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
      .toLowerCase()
      .replace(/\s+/g, ' ') // Normaliser les espaces multiples

    const value = planningData[dayStr] || ''
    const isReserved = value === 'x'
    const isAvailable = value && !isReserved
    const isBlocked = isDateBlocked(displayDate)
    const iso = toISO(displayDate)
    const isStartAllowed = endAllowedStartSet.has(iso) // début de bloc autorisé (gap >= 6)
    const allowEndOnBlockStart = selectedStart && !selectedEnd && isStartAllowed

    if (isPast && !isToday) {
      cell.classList.add('unavailable')
    } else if (isReserved) {
      cell.classList.add('reserved')
    } else if (isBlocked) {
      if (isStartAllowed) {
        // Début de bloc avec trou suffisant -> vert dès la visu
        cell.classList.add('available', 'end-only')
        cell.title = 'Départ possible'
      } else {
        // Milieu de bloc OU début avec gap<6 -> gris
        cell.classList.add('unavailable')
      }
    } else {
      // Jour réellement libre
      cell.classList.add('available')
    }

    if (isToday) {
      cell.style.border = '1px solid rgba(255, 230, 100, 0.9)'
      cell.style.boxShadow = '0 0 6px 2px rgba(255, 255, 200, 0.4)'
    }

    if (selectedStart && displayDate.getTime() === selectedStart.getTime())
      cell.classList.add('start')
    if (selectedEnd && displayDate.getTime() === selectedEnd.getTime())
      cell.classList.add('end')
    if (
      selectedStart &&
      selectedEnd &&
      displayDate > selectedStart &&
      displayDate < selectedEnd
    )
      cell.classList.add('in-range')

    const dayLabel = document.createElement('div')
    dayLabel.className = 'day-label'
    dayLabel.textContent = day

    const priceLabel = document.createElement('div')
    priceLabel.className = 'price-label'
    if (
      isAvailable &&
      !isPast &&
      (!isBlocked || isStartAllowed) &&
      !isNaN(parseFloat(value))
    ) {
      priceLabel.textContent = `${value} €`
    }

    cell.appendChild(dayLabel)
    if (priceLabel.textContent) cell.appendChild(priceLabel)

    if (
      !isPast &&
      !isReserved &&
      // autorisé si non bloqué, OU si début de bloc réel et on finit une sélection
      (!isBlocked || allowEndOnBlockStart) &&
      // si prix absent, on tolère quand même pour un "départ possible"
      (!isNaN(parseFloat(value)) || allowEndOnBlockStart)
    ) {
      cell.addEventListener('click', (e) => handleDateClick(displayDate, e))
    }

    grid.appendChild(cell)
  }
}

// ⏮ / ⏭ Navigation calendrier
document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--
  if (currentMonth < 0) {
    currentMonth = 11
    currentYear--
  }
  renderCalendar(currentMonth, currentYear)
})

document.getElementById('next-month').addEventListener('click', () => {
  currentMonth++
  if (currentMonth > 11) {
    currentMonth = 0
    currentYear++
  }
  renderCalendar(currentMonth, currentYear)
})

// 📅 Gère les 6 jours minimum
function showTooltip(message, targetElement) {
  const tooltip = document.createElement('div')
  tooltip.innerHTML = message.replace(
    /<strong>(.*?)<\/strong>/g,
    '<strong style="color: #000;">$1</strong>'
  )
  tooltip.style.position = 'absolute'
  tooltip.style.background = '#fff'
  tooltip.style.color = '#000'
  tooltip.style.padding = '0.4rem 0.7rem'
  tooltip.style.fontSize = '0.85rem'
  tooltip.style.borderRadius = '6px'
  tooltip.style.boxShadow = '0 0 8px rgba(0,0,0,0.15)'
  tooltip.style.zIndex = '10000'
  tooltip.style.transition = 'opacity 0.2s ease'
  tooltip.style.opacity = '0'

  document.body.appendChild(tooltip)

  const rect = targetElement.getBoundingClientRect()
  tooltip.style.left = `${
    rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2
  }px`
  tooltip.style.top = `${rect.top + window.scrollY - 45}px`

  requestAnimationFrame(() => {
    tooltip.style.opacity = '1'
  })

  setTimeout(() => {
    tooltip.style.opacity = '0'
    setTimeout(() => tooltip.remove(), 300)
  }, 5000)
}

// 🚀 Démarre le chargement
fetchPlanning()

// 🌐 Exposer la fonction de reset du planning sous un nom non conflictuel
window.planningResetSelection = resetSelection
