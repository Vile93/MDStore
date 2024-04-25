document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("show");
});
const navItems = document.querySelectorAll("header .nav-item");
for (let i = 0; i < navItems.length; i++)
  navItems[i].addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("show");
  });
