let path = window.location.pathname;
let page = path.split("/").pop();
const navLogo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav");
if (page === "index.html") {
  navLogo.style.opacity = "0";
}
window.onscroll = () => {
  if (
    document.body.scrollTop > 20 ||
    (document.documentElement.scrollTop > 20 && page === "index.html")
  ) {
    navLogo.style.opacity = "1";
  } else if (page === "index.html") {
    navLogo.style.opacity = "0";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.background = "#ffffff";
  } else {
    nav.style.background = "transparent";
  }
};
console.log(page);
