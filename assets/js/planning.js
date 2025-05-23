// 🌐 Détection de langue
const page = window.location.pathname;
let lang = "fr";
if (page.includes("index-en")) lang = "en";
else if (page.includes("index-de")) lang = "de";

// 📅 Traductions mois + jours
const monthNamesByLang = {
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
};

const daysByLang = {
  fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
};

// 📄 Données de planning
const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEDTcen1gulUUFxzIX3-Mr5fCJZsmlp83UPmXCP89mSgIwARJg9JgwbEGmg8f8HCm2c-WnsmaA-Kup/pub?gid=0&single=true&output=csv";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let planningData = {};
let selectedStart = null;
let selectedEnd = null;

// 📥 Récupération CSV
async function fetchPlanning() {
  const res = await fetch(csvUrl);
  const text = await res.text();
  const rows = text.trim().split("\n").slice(1).map(r => r.split(","));
  rows.forEach(([rawDate, rawValue]) => {
    const cleanDate = rawDate.trim().replace(/^"|"$/g, "");
    const cleanValue = rawValue?.trim().toLowerCase();
    planningData[cleanDate] = cleanValue;
  });
  renderCalendar(currentMonth, currentYear);
}

// 🔄 Réinitialise la sélection
function resetSelection(keepCalendar = false) {
  selectedStart = null;
  selectedEnd = null;
  const banner = document.getElementById("mobile-banner");
  if (banner) banner.style.display = "none";
  if (!keepCalendar) renderCalendar(currentMonth, currentYear);
}

// 📅 Gère clic sur date
function handleDateClick(dateObj, event) {
  const MIN_NIGHTS = 6;

  if (!selectedStart || (selectedStart && selectedEnd)) {
    selectedStart = dateObj;
    selectedEnd = null;
  } else if (dateObj < selectedStart) {
    selectedStart = dateObj;
  } else if (dateObj.getTime() === selectedStart.getTime()) {
    resetSelection(true);
    return;
  } else {
    // Vérifie que la plage contient uniquement des jours disponibles avec un tarif
    let current = new Date(selectedStart);
    let hasInvalid = false;

    while (current < dateObj) {
      const key = current.toLocaleDateString("fr-FR", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric"
      }).toLowerCase();

      const value = planningData[key];
      if (!value || value === "x" || isNaN(parseFloat(value))) {
        hasInvalid = true;
        break;
      }

      current.setDate(current.getDate() + 1);
    }

    const diffNights = Math.round((dateObj - selectedStart) / (1000 * 60 * 60 * 24));
    if (diffNights < MIN_NIGHTS) {
      const minEndDate = new Date(selectedStart);
      minEndDate.setDate(minEndDate.getDate() + MIN_NIGHTS);

      const minDateStr = minEndDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long"
      });

      // ✅ Texte avec date en gras (et soulignée si tu veux)
      showTooltip(
        `Minimum 6 nuits. Choisissez au moins jusqu’au <strong><u>${minDateStr}</u></strong>`,
        event.currentTarget
      );
      return;
    }

    if (hasInvalid) {
      showTooltip("Votre sélection contient un jour ou plusieurs non disponible", event.currentTarget);
      resetSelection(true);
      return;
    }

    selectedEnd = dateObj;
  }

  renderCalendar(currentMonth, currentYear);
  if (selectedStart && selectedEnd) showBannerPanel();
}

// 🧱 Génère le calendrier
function renderCalendar(month, year) {
  const grid = document.getElementById("calendar-grid");
  const title = document.getElementById("calendar-title");
  const monthNames = monthNamesByLang[lang];
  const days = daysByLang[lang];

  title.textContent = `${monthNames[month]} ${year}`;
  grid.innerHTML = "";

  days.forEach(jour => {
    const label = document.createElement("div");
    label.className = "calendar-label";
    label.textContent = jour;
    grid.appendChild(label);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = (firstDay === 0) ? 6 : firstDay - 1;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < offset; i++) grid.appendChild(document.createElement("div"));

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "calendar-cell";
    const displayDate = new Date(year, month, day);
    displayDate.setHours(0, 0, 0, 0);

    const isToday = displayDate.getTime() === today.getTime();
    const isPast = displayDate < today;

    const dayStr = displayDate.toLocaleDateString("fr-FR", {
      weekday: "short", day: "2-digit", month: "long", year: "numeric"
    }).toLowerCase();

    const value = planningData[dayStr] || "";
    const isReserved = value === "x";
    const isAvailable = value && !isReserved;

    if (isPast && !isToday) {
      cell.classList.add("unavailable");
    } else if (isReserved) {
      cell.classList.add("reserved");
    } else if (isAvailable) {
      cell.classList.add("available");
    } else {
      cell.classList.add("unavailable");
    }

    if (isToday) {
      cell.style.border = "1px solid rgba(255, 230, 100, 0.9)";
      cell.style.boxShadow = "0 0 6px 2px rgba(255, 255, 200, 0.4)";
    }

    if (selectedStart && displayDate.getTime() === selectedStart.getTime()) cell.classList.add("start");
    if (selectedEnd && displayDate.getTime() === selectedEnd.getTime()) cell.classList.add("end");
    if (selectedStart && selectedEnd && displayDate > selectedStart && displayDate < selectedEnd) cell.classList.add("in-range");

    const dayLabel = document.createElement("div");
    dayLabel.className = "day-label";
    dayLabel.textContent = day;

    const priceLabel = document.createElement("div");
    priceLabel.className = "price-label";
    if (isAvailable && !isPast) priceLabel.textContent = `${value} €`;

    cell.appendChild(dayLabel);
    if (priceLabel.textContent) cell.appendChild(priceLabel);

    if (!isPast && !isReserved && !isNaN(parseFloat(value))) {
      cell.addEventListener("click", (e) => handleDateClick(displayDate, e));
    }

    grid.appendChild(cell);
  }
}

// ⏮ / ⏭ Navigation calendrier
document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// 📅 Gère les 6 jours minimum
function showTooltip(message, targetElement) {
  const tooltip = document.createElement("div");
  tooltip.innerHTML = message;
  tooltip.style.position = "absolute";
  tooltip.style.background = "#fff";
  tooltip.style.color = "#000";
  tooltip.style.padding = "0.4rem 0.7rem";
  tooltip.style.fontSize = "0.85rem";
  tooltip.style.borderRadius = "6px";
  tooltip.style.boxShadow = "0 0 8px rgba(0,0,0,0.15)";
  tooltip.style.zIndex = "10000";
  tooltip.style.transition = "opacity 0.2s ease";
  tooltip.style.opacity = "0";

  document.body.appendChild(tooltip);

  const rect = targetElement.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
  tooltip.style.top = `${rect.top + window.scrollY - 45}px`;

  requestAnimationFrame(() => {
    tooltip.style.opacity = "1";
  });

  setTimeout(() => {
    tooltip.style.opacity = "0";
    setTimeout(() => tooltip.remove(), 300);
  }, 5000);
}

// 🚀 Démarre le chargement
fetchPlanning();
