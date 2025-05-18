// 🔍 Détection de la langue en fonction du fichier HTML
const page = window.location.pathname;
let lang = "fr";
if (page.includes("index-en")) lang = "en";
else if (page.includes("index-de")) lang = "de";

// 📅 Noms des mois et jours selon la langue
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

// 📄 URL du fichier CSV contenant les disponibilités
const csvUrl = "https://docs.google.com/spreadsheets/.../output=csv";

// 📍 États du calendrier
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let planningData = {};              // Stocke les dates et leurs valeurs
let selectedStart = null;          // Date d’arrivée sélectionnée
let selectedEnd = null;            // Date de départ sélectionnée

// 📥 Récupère le planning depuis le fichier CSV
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

// 🔄 Réinitialise les dates sélectionnées
function resetSelection(keepCalendar = false) {
  selectedStart = null;
  selectedEnd = null;
  const banner = document.getElementById("mobile-banner");
  if (banner) banner.style.display = "none";
  if (!keepCalendar) renderCalendar(currentMonth, currentYear);
}

// 📅 Gère le clic sur un jour du calendrier
function handleDateClick(dateObj) {
  if (!selectedStart || (selectedStart && selectedEnd)) {
    selectedStart = dateObj;
    selectedEnd = null;
  } else if (dateObj < selectedStart) {
    selectedStart = dateObj;
  } else if (dateObj.getTime() === selectedStart.getTime()) {
    resetSelection(true);
    return;
  } else {
    selectedEnd = dateObj;
  }
  renderCalendar(currentMonth, currentYear);
  if (selectedStart && selectedEnd) showBannerPanel();
}

// 📤 Affiche la bannière avec les dates sélectionnées
function showBannerPanel() {
  const nights = Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
  const startStr = selectedStart.toLocaleDateString("fr-FR");
  const endStr = selectedEnd.toLocaleDateString("fr-FR");

  document.getElementById("mobile-start").textContent = startStr;
  document.getElementById("mobile-end").textContent = endStr;
  document.getElementById("mobile-nights").textContent = nights;
  document.getElementById("mobile-banner").style.display = "block";

  updateBannerSummary();
  updateTotalPrice();
}

// 💸 Met à jour le prix total et le prix par personne
function updateTotalPrice() {
  const nights = Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
  const adults = parseInt(document.getElementById("adults").value || "0");
  const children = parseInt(document.getElementById("children").value || "0");
  const persons = adults + children;
  const total = nights * 120;

  const priceText = persons > 0
    ? `Total : ${total} € (≈ ${(total / persons).toFixed(2)} € / pers)`
    : `Total : ${total} €`;

  document.getElementById("total-price").textContent = priceText;
}

// 🗓️ Génère et affiche le calendrier du mois en cours
function renderCalendar(month, year) {
  const grid = document.getElementById("calendar-grid");
  const title = document.getElementById("calendar-title");
  const monthNames = monthNamesByLang[lang];
  const days = daysByLang[lang];

  title.textContent = `${monthNames[month]} ${year}`;
  grid.innerHTML = "";

  // En-têtes jours de la semaine
  days.forEach(jour => {
    const label = document.createElement("div");
    label.className = "calendar-label";
    label.textContent = jour;
    grid.appendChild(label);
  });

  // Jours du mois avec état
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

    // Statut de la cellule
    if (isPast && !isToday) {
      cell.classList.add("unavailable");
    } else if (isReserved) {
      cell.classList.add("reserved");
    } else if (isAvailable) {
      cell.classList.add("available");
    } else {
      cell.classList.add("unavailable");
    }

    // Bordure pour aujourd’hui
    if (isToday) {
      cell.style.border = "1px solid rgba(255, 230, 100, 0.9)";
      cell.style.boxShadow = "0 0 6px 2px rgba(255, 255, 200, 0.4)";
    }

    // Mise en évidence des dates sélectionnées
    if (selectedStart && displayDate.getTime() === selectedStart.getTime()) {
      cell.classList.add("start");
    }
    if (selectedEnd && displayDate.getTime() === selectedEnd.getTime()) {
      cell.classList.add("end");
    }
    if (
      selectedStart && selectedEnd &&
      displayDate > selectedStart &&
      displayDate < selectedEnd
    ) {
      cell.classList.add("in-range");
    }

    // Texte du jour et prix
    const dayLabel = document.createElement("div");
    dayLabel.className = "day-label";
    dayLabel.textContent = day;

    const priceLabel = document.createElement("div");
    priceLabel.className = "price-label";
    if (isAvailable && !isPast) priceLabel.textContent = `${value} €`;

    cell.appendChild(dayLabel);
    if (priceLabel.textContent) cell.appendChild(priceLabel);

    // Ajoute l’événement de clic si dispo
    if (!isReserved && !isPast) {
      cell.addEventListener("click", () => handleDateClick(displayDate));
    }

    grid.appendChild(cell);
  }
}

// ⏮ Mois précédent
document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

// ⏭ Mois suivant
document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// ⚙️ Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-banner");
  const details = document.getElementById("mobile-banner-details");

  if (toggleBtn && details) {
    toggleBtn.addEventListener("click", () => {
      const open = details.classList.toggle("open");
      toggleBtn.innerHTML = open ? "▲" : "▼";
      updateBannerSummary();
    });
  }

  document.getElementById("adults").addEventListener("input", updateTotalPrice);
  document.getElementById("children").addEventListener("input", updateTotalPrice);

  document.getElementById("cancel-selection").addEventListener("click", (e) => {
    e.preventDefault();
    resetSelection();
  });
});

// 🚀 Lance le chargement du planning
fetchPlanning();

// 🧾 Affiche un résumé du séjour dans la bannière repliée
function updateBannerSummary() {
  if (!selectedStart || !selectedEnd) return;
  const nights = Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
  const startStr = selectedStart.toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' });
  const endStr = selectedEnd.toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' });

  const summary = document.getElementById("banner-summary");
  const details = document.getElementById("mobile-banner-details");
  if (!details.classList.contains("open")) {
    summary.textContent = `Séjour du ${startStr} au ${endStr} – ${nights} nuit${nights > 1 ? 's' : ''}`;
  } else {
    summary.textContent = "Dates sélectionnées";
  }
}

