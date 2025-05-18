const page = window.location.pathname;
let lang = "fr";
if (page.includes("index-en")) lang = "en";
else if (page.includes("index-de")) lang = "de";

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

const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEDTcen1gulUUFxzIX3-Mr5fCJZsmlp83UPmXCP89mSgIwARJg9JgwbEGmg8f8HCm2c-WnsmaA-Kup/pub?gid=0&single=true&output=csv";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let planningData = {};
let selectedStart = null;
let selectedEnd = null;

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

function resetSelection() {
  selectedStart = null;
  selectedEnd = null;
  document.getElementById("reservation-panel").style.display = "none";
  const banner = document.getElementById("mobile-banner");
  if (banner) banner.style.display = "none";
  renderCalendar(currentMonth, currentYear);
}

function handleDateClick(dateObj, cellElement) {
  if (!selectedStart) {
    selectedStart = dateObj;
  } else if (!selectedEnd) {
    if (dateObj <= selectedStart) {
      selectedStart = dateObj;
      selectedEnd = null;
    } else {
      selectedEnd = dateObj;
      showReservationPanel();
    }
  } else {
    resetSelection();
    selectedStart = dateObj;
  }
  renderCalendar(currentMonth, currentYear);
}

function showReservationPanel() {
  const nights = Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
  const startStr = selectedStart.toLocaleDateString("fr-FR");
  const endStr = selectedEnd.toLocaleDateString("fr-FR");

  document.getElementById("start-date").textContent = startStr;
  document.getElementById("end-date").textContent = endStr;
  document.getElementById("nights").textContent = nights;
  document.getElementById("total-price").textContent = `Total : ${nights * 120} €`;

  document.getElementById("reservation-panel").style.display = "block";

  const banner = document.getElementById("mobile-banner");
  if (banner) {
    document.getElementById("mobile-start").textContent = startStr;
    document.getElementById("mobile-end").textContent = endStr;
    document.getElementById("mobile-nights").textContent = nights;
    banner.style.display = "block";
  }
}

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

  for (let i = 0; i < offset; i++) {
    grid.appendChild(document.createElement("div"));
  }

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

    // Statut visuel
    if (isPast && !isToday) {
      cell.classList.add("unavailable");
    } else if (isReserved) {
      cell.classList.add("reserved");
    } else if (isAvailable) {
      cell.classList.add("available");
    } else {
      cell.classList.add("unavailable");
    }

    // Aujourd’hui
    if (isToday) {
      cell.style.border = "1px solid rgba(255, 230, 100, 0.9)";
      cell.style.boxShadow = "0 0 6px 2px rgba(255, 255, 200, 0.4)";
    }

    // Visuel sélection
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

    const dayLabel = document.createElement("div");
    dayLabel.className = "day-label";
    dayLabel.textContent = day;

    const priceLabel = document.createElement("div");
    priceLabel.className = "price-label";
    if (isAvailable && !isPast) priceLabel.textContent = `${value} €`;

    cell.appendChild(dayLabel);
    if (priceLabel.textContent) cell.appendChild(priceLabel);

    // Clic actif uniquement si sélectionnable
    if (!isReserved && !isPast) {
      cell.addEventListener("click", () => handleDateClick(displayDate, cell));
    }

    grid.appendChild(cell);
  }
}

document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  resetSelection();
  renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  resetSelection();
  renderCalendar(currentMonth, currentYear);
});

document.getElementById("cancel-selection").addEventListener("click", e => {
  e.preventDefault();
  resetSelection();
});

fetchPlanning();

// Bannière mobile : bouton toggle (▲▼)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-banner");
  const details = document.getElementById("mobile-banner-details");

  if (toggleBtn && details) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = details.style.display === "block";
      details.style.display = isOpen ? "none" : "block";
      toggleBtn.innerHTML = isOpen ? "▲" : "▼";
    });
  }
});
