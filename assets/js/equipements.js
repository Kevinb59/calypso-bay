document.addEventListener("DOMContentLoaded", async () => {
  try {
    const page = window.location.pathname;
    let lang = "fr";
    if (page.includes("index-en")) lang = "en";
    else if (page.includes("index-de")) lang = "de";

    let file = "data/equipements.json";
    if (lang === "en") file = "data/equipements-en.json";
    else if (lang === "de") file = "data/equipements-de.json";
    console.log("Langue détectée :", lang);
    console.log("Fichier chargé :", file);

    const res = await fetch(file);
    const data = await res.json();

    const btnContainer = document.getElementById("equipment-buttons");
    const popupContainer = document.getElementById("popup-container");

    for (const key in data) {
      const category = data[key];

      // Création du bouton
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "button";
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
        background: rgba(255,255,255,0.5); justify-content: center; align-items: center;
      `;

      popup.innerHTML = `
        <div class="popup-content" style="
          background: #fff; color: #111; padding: 2em;
          border-radius: 4px; max-width: 500px; width: 90%;
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