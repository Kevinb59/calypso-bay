document.addEventListener("DOMContentLoaded", function () {
  fetch("data/equipements.json")
    .then(res => res.json())
    .then(data => {
      const btnContainer = document.getElementById("equipement-buttons");
      const body = document.body;

      for (const key in data) {
        const cat = data[key];

        // Crée le bouton
        const btn = document.createElement("button");
        btn.className = "equipment-btn";
        btn.dataset.category = key;
        btn.innerText = `${cat.icon} ${cat.label}`;
        btnContainer.appendChild(btn);

        // Crée le popup
        const popup = document.createElement("div");
        popup.className = "equipment-popup";
        popup.id = "popup-" + key;
        popup.innerHTML = `
          <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h3>${cat.icon} ${cat.label}</h3>
            <ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>`;
        body.appendChild(popup);
      }

      // Gestion ouverture popup
      document.querySelectorAll(".equipment-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const popup = document.getElementById("popup-" + btn.dataset.category);
          if (popup) popup.style.display = "flex";
        });
      });

      // Fermeture popups
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-popup") || e.target.classList.contains("equipment-popup")) {
          document.querySelectorAll(".equipment-popup").forEach(p => p.style.display = "none");
        }
      });
    });
});
