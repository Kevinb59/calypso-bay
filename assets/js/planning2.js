document.addEventListener("DOMContentLoaded", () => {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEDTcen1gulUUFxzIX3-Mr5fCJZsmlp83UPmXCP89mSgIwARJg9JgwbEGmg8f8HCm2c-WnsmaA-Kup/pub?gid=0&single=true&output=csv";

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let planningData = {};

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

  function renderCalendar(month, year) {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const grid = document.getElementById("calendar-grid");
    const title = document.getElementById("calendar-title");

    title.textContent = `${monthNames[month]} ${year}`;
    grid.innerHTML = "";

    const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    jours.forEach(jour => {
      const label = document.createElement("div");
      label.className = "calendar-label";
      label.textContent = jour;
      grid.appendChild(label);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (firstDay === 0) ? 6 : firstDay - 1;

    for (let i = 0; i < offset; i++) {
      grid.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("div");
      cell.className = "calendar-cell";
      const displayDate = new Date(year, month, day);
      const dayStr = displayDate.toLocaleDateString("fr-FR", {
        weekday: "short", day: "2-digit", month: "long", year: "numeric"
      }).toLowerCase();

      const value = planningData[dayStr] || "";
      const isReserved = value === "x";
      const isAvailable = value && !isReserved;
      const isUnavailable = !value;

      if (isReserved) {
        cell.classList.add("reserved");
      } else if (isAvailable) {
        cell.classList.add("available");
      } else {
        cell.classList.add("unavailable");
      }

      const dayLabel = document.createElement("div");
      dayLabel.className = "day-label";
      dayLabel.textContent = day;

      const priceLabel = document.createElement("div");
      priceLabel.className = "price-label";
      if (isAvailable) priceLabel.textContent = `${value} €`;

      cell.appendChild(dayLabel);
      if (isAvailable) cell.appendChild(priceLabel);

      grid.appendChild(cell);
    }
  }

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

  fetchPlanning();
});
