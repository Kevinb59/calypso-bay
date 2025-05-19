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

// 🧾 Mise à jour du titre et des pastilles d'étape
function updateBannerSummary() {
  const summary = document.getElementById("banner-summary");
  summary.textContent = "Demande de réservation";

  const dot1 = document.getElementById("step-dot-1");
  const dot2 = document.getElementById("step-dot-2");

  if (dot1 && dot2) {
    dot1.style.color = step >= 1 ? "#00ff88" : "white";
    dot1.style.opacity = step >= 1 ? "1" : "0.4";

    dot2.style.color = step === 2 ? "#00ff88" : "white";
    dot2.style.opacity = step === 2 ? "1" : "0.4";
  }
}

let step = 1;

function goToStep2() {
  step = 2;
  const details = document.getElementById("mobile-banner-details");
  details.classList.remove("open");
  details.classList.add("full");

  document.getElementById("toggle-banner").style.display = "none";
  document.getElementById("step-toggle").textContent = "Envoyer la demande de réservation";
  document.getElementById("step-toggle").classList.remove("fa-arrow-circle-right");
  document.getElementById("step-toggle").classList.add("fa-paper-plane");

  document.getElementById("cancel-selection").textContent = "Précédent";
  document.getElementById("cancel-selection").classList.remove("fa-times");
  document.getElementById("cancel-selection").classList.add("fa-arrow-left");

  updateBannerSummary();

  document.getElementById("adults").disabled = true;
  document.getElementById("children").disabled = true;
  document.getElementById("adults").classList.add("locked");
  document.getElementById("children").classList.add("locked");

  addStep2Fields();
}

function goToStep1() {
  step = 1;
  const details = document.getElementById("mobile-banner-details");
  details.classList.remove("full");

  setTimeout(() => {
    details.classList.add("open");
  }, 10);

  const toggleBtn = document.getElementById("toggle-banner");
  toggleBtn.style.display = "inline-block";
  toggleBtn.innerHTML = "▼";

  document.getElementById("step-toggle").textContent = "Suivant";
  document.getElementById("step-toggle").classList.remove("fa-paper-plane");
  document.getElementById("step-toggle").classList.add("fa-arrow-circle-right");

  document.getElementById("cancel-selection").textContent = "Annuler";
  document.getElementById("cancel-selection").classList.remove("fa-arrow-left");
  document.getElementById("cancel-selection").classList.add("fa-times");

  updateBannerSummary();

  document.getElementById("adults").disabled = false;
  document.getElementById("children").disabled = false;
  document.getElementById("adults").classList.remove("locked");
  document.getElementById("children").classList.remove("locked");

  setTimeout(() => {
    removeStep2Fields();
  }, 600);
}

function addStep2Fields() {
  const container = document.getElementById("mobile-banner-details");
  if (document.getElementById("step2-fields")) return;

  const div = document.createElement("div");
  div.id = "step2-fields";
  div.innerHTML = `
    <div class="fields" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-name">Nom</label><input type="text" id="r-name" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-email">Email</label><input type="email" id="r-email" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-phone">Téléphone</label><input type="tel" id="r-phone" required></div>
    </div>
    <div class="field"><label for="r-message">Message (optionnel)</label><textarea id="r-message" rows="3"></textarea></div>
  `;

  const actions = container.querySelector(".actions");
  container.insertBefore(div, actions);
}

function removeStep2Fields() {
  const el = document.getElementById("step2-fields");
  if (el) el.remove();
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

  document.getElementById("step-toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (step === 1) goToStep2();
    else sendReservationRequest();
  });

  document.getElementById("cancel-selection")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (step === 2) goToStep1();
    else resetSelection();
  });

  updateAdultsOptions();
  updateChildrenOptions();
});
