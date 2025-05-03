document.addEventListener("DOMContentLoaded", () => {
  fetch("data/equipements.json")
    .then((response) => response.json())
    .then((data) => {
      const buttonContainer = document.getElementById("equipement-buttons");
      const popupContainer = document.getElementById("popups-container");

      data.forEach((categorie) => {
        // Crée le bouton
        const button = document.createElement("button");
        button.className = "equipment-btn";
        button.textContent = `${categorie.emoji} ${categorie.nom}`;
        button.dataset.popupId = `popup-${categorie.id}`;
        buttonContainer.appendChild(button);

        // Crée la popup
        const popup = document.createElement("div");
        popup.className = "equipment-popup";
        popup.id = `popup-${categorie.id}`;
        popup.innerHTML = `
          <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h3>${categorie.emoji} ${categorie.nom}</h3>
            <ul>${categorie.items.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
        `;
        popupContainer.appendChild(popup);

        // Fermer en cliquant sur la croix
        popup.querySelector(".close-popup").addEventListener("click", () => {
          popup.style.display = "none";
        });

        // Fermer en cliquant en dehors du cadre
        popup.addEventListener("click", (e) => {
          if (e.target === popup) popup.style.display = "none";
        });

        // Affiche la popup au clic sur le bouton
        button.addEventListener("click", () => {
          document.querySelectorAll(".equipment-popup").forEach(p => p.style.display = "none");
          popup.style.display = "flex";
        });
      });
    })
    .catch((err) => {
      console.error("Erreur lors du chargement des équipements :", err);
    });
});
