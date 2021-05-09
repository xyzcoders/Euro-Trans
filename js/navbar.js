window.onscroll = () => {
    const navLogo  = document.querySelector(".nav__logo");
    const nav = document.querySelector(".nav");
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navLogo.style.opacity = "1";
      nav.style.background = "#ffffff";
    } else {
      navLogo.style.opacity = "0";
      nav.style.background = "transparent";
    }
  };