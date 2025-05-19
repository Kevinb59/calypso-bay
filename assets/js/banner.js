// 📤 Affiche la bannière
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

// 💸 Met à jour le prix total réel (en fonction du planning CSV)
function updateTotalPrice() {
  if (!selectedStart || !selectedEnd) return;

  const adults = parseInt(document.getElementById("adults").value || "0");
  const children = parseInt(document.getElementById("children").value || "0");
  const touristTaxPerAdultPerNight = 4;
  const cleaningFee = 100;

  let nights = 0;
  let baseTotal = 0;
  let currentDate = new Date(selectedStart);

  while (currentDate < selectedEnd) {
    const key = currentDate.toLocaleDateString("fr-FR", {
      weekday: "short", day: "2-digit", month: "long", year: "numeric"
    }).toLowerCase();

    const value = planningData[key];
    const price = parseFloat(value);

    if (!isNaN(price)) {
      baseTotal += price;
      nights++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const taxTotal = adults * nights * touristTaxPerAdultPerNight;
  const total = baseTotal + cleaningFee + taxTotal;

  const container = document.getElementById("total-price");

  container.innerHTML = `
    <div style="text-align: left;">
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Total des nuits (${nights})</span>
        <strong>${baseTotal} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Frais de ménage</span>
        <strong>${cleaningFee} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Taxes (${adults} adulte${adults > 1 ? "s" : ""})</span>
        <strong>${taxTotal} €</strong>
      </div>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.3); margin: 0.5rem 0;" />
      <div style="display: flex; justify-content: space-between; font-weight: bold;">
        <span>Total</span>
        <span>${total} €</span>
      </div>
    </div>
  `;
}

// 🧾 Résumé mini bannière
function updateBannerSummary() {
  if (!selectedStart || !selectedEnd) return;
  const nights = Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
  const startStr = selectedStart.toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' });
  const endStr = selectedEnd.toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' });

  const summary = document.getElementById("banner-summary");
  const details = document.getElementById("mobile-banner-details");

  summary.textContent = details.classList.contains("open")
    ? "Demande de réservation: étape 1 sur 2"
    : `Séjour du ${startStr} au ${endStr} – ${nights} nuit${nights > 1 ? 's' : ''}`;
}

// 🧠 Logique de la bannière : toggle, validation, choix
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-banner");
  const details = document.getElementById("mobile-banner-details");

  if (toggleBtn && details) {
    toggleBtn.addEventListener("click", () => {
      const open = details.classList.toggle("open");
      toggleBtn.innerHTML = open ? "▼" : "▲";
      updateBannerSummary();
    });
  }

  // Dynamique 6 personnes
  const selectAdultes = document.getElementById("adults");
  const selectEnfants = document.getElementById("children");

  const path = window.location.pathname;
  let lang = "fr";
  if (path.includes("index-en")) lang = "en";
  else if (path.includes("index-de")) lang = "de";

  const labels = {
    fr: {
      adulte: (n) => `${n} adulte${n > 1 ? "s" : ""}`,
      enfant: (n) => `${n} enfant${n > 1 ? "s" : ""}`,
    },
    en: {
      adulte: (n) => `${n} adult${n > 1 ? "s" : ""}`,
      enfant: (n) => `${n} child${n > 1 ? "ren" : ""}`,
    },
    de: {
      adulte: (n) => `${n} Erwachsene${n > 1 ? "n" : ""}`,
      enfant: (n) => `${n} Kind${n > 1 ? "er" : ""}`,
    },
  };

  function updateChildrenOptions() {
    const nbAdultes = parseInt(selectAdultes.value) || 0;
    const maxEnfants = 6 - nbAdultes;
    const current = Math.min(parseInt(selectEnfants.value) || 0, maxEnfants);

    selectEnfants.innerHTML = "";
    for (let i = 0; i <= maxEnfants; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = labels[lang].enfant(i);
      if (i === current) opt.selected = true;
      selectEnfants.appendChild(opt);
    }
    updateTotalPrice();
  }

  function updateAdultsOptions() {
    const nbEnfants = parseInt(selectEnfants.value) || 0;
    const maxAdultes = 6 - nbEnfants;
    const current = Math.min(parseInt(selectAdultes.value) || 1, maxAdultes);

    selectAdultes.innerHTML = "";
    for (let i = 1; i <= maxAdultes; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = labels[lang].adulte(i);
      if (i === current) opt.selected = true;
      selectAdultes.appendChild(opt);
    }
    updateTotalPrice();
  }

  selectAdultes.addEventListener("change", updateChildrenOptions);
  selectEnfants.addEventListener("change", updateAdultsOptions);

  document.getElementById("cancel-selection").addEventListener("click", (e) => {
    e.preventDefault();
    resetSelection();
  });

  updateAdultsOptions();
  updateChildrenOptions();
});
