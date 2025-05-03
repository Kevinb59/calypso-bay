document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentContent = button.nextElementSibling;

      // Ferme tous les autres contenus
      document.querySelectorAll(".toggle-content").forEach((content) => {
        if (content !== currentContent) {
          content.style.display = "none";
        }
      });

      // Bascule l'affichage du bouton cliqué
      currentContent.style.display = currentContent.style.display === "block" ? "none" : "block";
    });
  });
});
