document.addEventListener("DOMContentLoaded", function () {
  // Ferme tous les contenus au chargement
  document.querySelectorAll(".toggle-content").forEach((content) => {
    content.style.display = "none";
  });

  // Ajoute le comportement de toggle avec fermeture des autres
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentContent = button.nextElementSibling;

      document.querySelectorAll(".toggle-content").forEach((content) => {
        if (content !== currentContent) {
          content.style.display = "none";
        }
      });

      currentContent.style.display =
        currentContent.style.display === "block" ? "none" : "block";
    });
  });
});
