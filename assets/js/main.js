/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===============  MENU SHOW ===============*/
// validate if constant exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===============  MENU HIDDEN ===============*/

// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ==============SHADOW HEADER ========
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
// ============== Projects

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
 

// ================== typed js =============================

var typed1 = new Typed(".home__title", {
  strings: [" Freedom Fighter", " Socialist", " Father"],
  typeSpeed: 40,
  backSpeed: 20,
  smartBackspace: true,
  loop: true,
  showCursor: false,
});

function initializeTyped() {
  var typed2 = new Typed(".my-skills", {
    strings: [
      "<strong>Advocated nonviolent resistance</strong> ",
      "<strong>Promoted social equality</strong> ",
      "<strong>Fought against discrimination</strong> ",
      "<strong>Inspired civil rights movements</strong> ",
      "<strong>Championed self-reliance</strong> ",
      "<strong>Spoke against untouchability</strong> ",
      "<strong>Mobilized masses peacefully</strong> ",
      "<strong>Inspired global leaders</strong> ",
      "<strong>Promoted education for all</strong> ",
      "<strong>Exemplified simplicity and humility</strong> ",
    ],
    typeSpeed: 25,
    backSpeed: 0,
    smartBackspace: true,
    loop: true,
  });
}
initializeTyped();

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 130,
  reset: true  //animations repeat
});

sr.reveal(
  `.home__perfil, .about__image, .contact__mail,.projectcontainer,.section__title-2`,
  {
    origin: "right",
  }
);
sr.reveal(
  `.home__name,.autotype1,.home__info, .about__container , .section__title-1 , .about__info, .contact__social, .contact__data,.autotype1`,
  { origin: "left" }
);
sr.reveal(`.services__card, .card__container`, { interval: 90 });










