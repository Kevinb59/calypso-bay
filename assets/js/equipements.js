document.addEventListener("DOMContentLoaded", function () {
  fetch('https://raw.githubusercontent.com/TON_UTILISATEUR_GITHUB/TON_REPO/main/equipements.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector(".inner div");
      const body = document.body;

      for (const key in data) {
        const cat = data[key];

        // Bouton
        const button = document.createElement("button");
        button.className = "equipment-btn";
        button.dataset.category = key;
        button.innerText = `${cat.icon} ${cat.label}`;
        container.appendChild(button);

        // Popup
        const popup = document.createElement("div");
        popup.className = "equipment-popup";
        popup.id = "popup-" + key;
        popup.innerHTML = `
          <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h3>${cat.icon} ${cat.label}</h3>
            <ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
        `;
        body.appendChild(popup);
      }

      // Ajoute les listeners après génération
      document.querySelectorAll(".equipment-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const popup = document.getElementById("popup-" + btn.dataset.category);
          if (popup) popup.style.display = "flex";
        });
      });

      document.querySelectorAll(".close-popup").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.closest(".equipment-popup").style.display = "none";
        });
      });

      document.querySelectorAll(".equipment-popup").forEach(popup => {
        popup.addEventListener("click", (e) => {
          if (e.target === popup) popup.style.display = "none";
        });
      });
    });
});
