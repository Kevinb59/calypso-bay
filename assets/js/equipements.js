document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetch("data/equipements.json").then(res => res.json());
  const btnContainer = document.getElementById("equipement-buttons");
  const popupContainer = document.getElementById("popup-container");

  data.forEach(category => {
    // Bouton
    const btn = document.createElement("a");
    btn.href = "#";
    btn.className = "button";
    btn.innerHTML = `${category.emoji} ${category.nom}`;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const popup = document.getElementById("popup-" + category.id);
      if (popup) popup.style.display = "flex";
    });
    btnContainer.appendChild(btn);

    // Popup
    const popup = document.createElement("div");
    popup.className = "equipment-popup";
    popup.id = "popup-" + category.id;
    popup.style.cssText = `
      display: none;
      position: fixed;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      z-index: 9999;
      justify-content: center;
      align-items: center;
    `;

    popup.innerHTML = `
      <div class="popup-content" style="
        background: #fff;
        color: #333;
        padding: 2em;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
      ">
        <span class="close-popup" style="
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 1.5em;
          cursor: pointer;
        ">&times;</span>
        <h3 style="color: #333; font-weight: 700; margin-top: 0;">
          ${category.emoji} ${category.nom}
        </h3>
        <ul style="margin: 0; padding-left: 1.2em;">
          ${category.equipements.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;

    // Fermeture
    popup.querySelector(".close-popup").addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });

    popupContainer.appendChild(popup);
  });
});
