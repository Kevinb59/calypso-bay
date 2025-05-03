document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("data/equipements.json");
    const data = await res.json();

    const btnContainer = document.getElementById("equipment-buttons");
    const popupContainer = document.getElementById("popup-container");

    for (const key in data) {
      const category = data[key];

      // Création du bouton (grands boutons du thème)
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "button small"; // <- pas 'small'
      btn.innerHTML = `${category.icon} ${category.label}`;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(`popup-${key}`).style.display = "flex";
      });
      btnContainer.appendChild(btn);

      // Création du popup
      const popup = document.createElement("div");
      popup.className = "equipment-popup";
      popup.id = `popup-${key}`;
      popup.style.cssText = `
        display: none; position: fixed; top: 0; left: 0;
        width: 100%; height: 100%; z-index: 9999;
        background: rgba(0,0,0,0.6); justify-content: center; align-items: center;
      `;

      popup.innerHTML = `
        <div class="popup-content" style="
          background: #fff; color: #111; padding: 2em;
          border-radius: 8px; max-width: 500px; width: 90%;
          max-height: 80vh; overflow-y: auto; position: relative;">
          <span class="close-popup" style="
            position: absolute; top: 10px; right: 15px;
            font-size: 1.5em; cursor: pointer;">&times;</span>
          <h3 style="margin-bottom: 1rem; font-weight: bold; color: #111;">
            ${category.icon} ${category.label}
          </h3>
          <ul>
            ${category.items.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;

      popup.querySelector(".close-popup").addEventListener("click", () => {
        popup.style.display = "none";
      });

      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
      });

      popupContainer.appendChild(popup);
    }
  } catch (err) {
    console.error("Erreur de chargement des équipements :", err);
  }
});
