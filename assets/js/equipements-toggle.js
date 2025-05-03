document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-content").forEach(el => {
    el.style.display = "none"; // tout fermé par défaut
  });

  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
