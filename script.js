const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".toggle i");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
