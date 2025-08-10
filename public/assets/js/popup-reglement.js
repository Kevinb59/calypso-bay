document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-reglement");
  const popup = document.getElementById("popup-reglement");
  const closeBtn = popup.querySelector(".close-popup");

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
