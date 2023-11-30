const menuIcon = document.getElementById("menu-icon-humburger");
const navigation = document.getElementById("navigation");
const navLinks = document.getElementById("nav-links");
const menuIconClose = document.getElementById("menu-icon-close");

menuIcon.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const links = navLinks.querySelectorAll("li");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

menuIconClose.addEventListener("click", () => {
  navigation.classList.remove("open");
});
