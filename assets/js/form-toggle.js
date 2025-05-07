document.addEventListener("DOMContentLoaded", () => {
  const btnContact = document.getElementById("btn-contact");
  const btnReservation = document.getElementById("btn-reservation");
  const formContact = document.getElementById("form-contact");
  const formReservation = document.getElementById("form-reservation");

  btnContact.addEventListener("click", () => {
    btnContact.classList.add("active");
    btnReservation.classList.remove("active");
    formContact.style.display = "block";
    formReservation.style.display = "none";
  });

  btnReservation.addEventListener("click", () => {
    btnReservation.classList.add("active");
    btnContact.classList.remove("active");
    formReservation.style.display = "block";
    formContact.style.display = "none";
  });
});
