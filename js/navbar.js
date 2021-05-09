window.onscroll = () => {
    const navLogo  = document.querySelector(".nav__logo");
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navLogo.style.opacity = "1";
    } else {
      navLogo.style.opacity = "0";
    }
  };