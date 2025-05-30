document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".form-wrapper form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      let isValid = true;

      // Supprime les anciens messages
      form.querySelectorAll(".error-message").forEach(el => el.remove());
      form.querySelectorAll(".field").forEach(el => el.classList.remove("invalid"));

      // Liste des champs obligatoires
      const requiredFields = form.querySelectorAll("input:not([type='submit']), select, textarea");
      requiredFields.forEach(field => {
        const fieldWrapper = field.closest(".field");
        const name = field.name || field.id;
        const value = field.value.trim();

        // Champ requis sauf messages
        if (!value && name !== "message" && name !== "r-message") {
          showError(fieldWrapper, "Champ requis");
          isValid = false;
        }

        // Validation email
        if (name.includes("email") && value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            showError(fieldWrapper, "Email invalide");
            isValid = false;
          }
        }

        // Validation téléphone international
        if ((name.includes("tel") || name.includes("phone")) && value) {
          const telRegex = /^[\d\s()+.-]{7,}$/;
          if (!telRegex.test(value)) {
            showError(fieldWrapper, "Téléphone invalide");
            isValid = false;
          }
        }

        // Validation cohérence dates
        if (name === "r-date-arr" || name === "r-date-dep") {
          const arr = form.querySelector("#r-date-arr")?.value;
          const dep = form.querySelector("#r-date-dep")?.value;
          if (arr && dep && arr > dep) {
            showError(form.querySelector("#r-date-dep").closest(".field"), "Date incohérente");
            isValid = false;
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });

  function showError(container, message) {
    container.classList.add("invalid");
    const span = document.createElement("span");
    span.className = "error-message";
    span.innerText = message;
    container.appendChild(span);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selectAdultes = document.getElementById("r-adultes");
  const selectEnfants = document.getElementById("r-enfants");

  // Détection de la langue à partir de l'URL
  let lang = "fr";
  const path = window.location.pathname;
  if (path.includes("index-en")) lang = "en";
  else if (path.includes("index-de")) lang = "de";

  // Libellés traduits
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

  function updateEnfantOptions() {
    const nbAdultes = parseInt(selectAdultes.value) || 0;
    const maxEnfants = 6 - nbAdultes;

    let current = parseInt(selectEnfants.value) || 0;
    if (current > maxEnfants) current = maxEnfants;

    selectEnfants.innerHTML = "";
    for (let i = 0; i <= maxEnfants; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = labels[lang].enfant(i);
      if (i === current) option.selected = true;
      selectEnfants.appendChild(option);
    }
  }

  function updateAdulteOptions() {
    const nbEnfants = parseInt(selectEnfants.value) || 0;
    const maxAdultes = 6 - nbEnfants;

    let current = parseInt(selectAdultes.value) || 0;
    if (current > maxAdultes) current = maxAdultes;

    selectAdultes.innerHTML = "";
    for (let i = 1; i <= maxAdultes; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = labels[lang].adulte(i);
      if (i === current) option.selected = true;
      selectAdultes.appendChild(option);
    }
  }

  selectAdultes.addEventListener("change", updateEnfantOptions);
  selectEnfants.addEventListener("change", updateAdulteOptions);

  // Initialisation
  updateEnfantOptions();
  updateAdulteOptions();
});
