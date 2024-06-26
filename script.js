// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#nenel-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

//Klik di luar sedebar untuk menghilangkan nav
const hamburger = document.querySelector("#nenel-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
