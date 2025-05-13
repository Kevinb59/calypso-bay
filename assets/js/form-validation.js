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
