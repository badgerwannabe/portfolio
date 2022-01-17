//VARIABLES

//sections

const contactSection = document.querySelector("#contact-section");
const projectSection = document.querySelector(".projects");
const sections = document.querySelectorAll("section");

//header elements
const headerAll = document.querySelector("header");
const logoTxt = document.querySelector("#top-logo-text");
const menuLinks = document.querySelectorAll("#nav-menu li");
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector("#nav-menu");

//body elements
const homeTextBtn = document.querySelector("#home-text button");
const contactBtn = document.querySelector(".about-contact");

//FUNCTIONS

//Menu animation function
const animateMenu = function (className) {
  if (className) {
    let neededLink = document.querySelector(`li[data-page=${className}]`);

    if (neededLink.innerText === "Home") {
      menuLinks.forEach((link) => {
        link.classList.remove("selected");

        headerAll.classList.remove("scrolled");

        logoTxt.classList.remove("scrolled");
      });
    } else {
      headerAll.classList.add("scrolled");
      logoTxt.classList.add("scrolled");

      menuLinks.forEach((link) => {
        if (link === !neededLink) {
        } else {
          link.classList.remove("selected");
          neededLink.classList.add("selected");
        }
      });
    }
  }
};

//Adjusted scroll to target for 120px

function scrollToTargetAdjusted(element) {
  // var headerOffset = 120;
  // var elementPosition = element.getBoundingClientRect().top;
  // var offsetPosition = elementPosition - headerOffset;

  const offset = 100;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

//scroll into view
const scrollToSection = function (classito, e) {
  let selectedMenu = e.target.innerText;
  let viewportWidth = window.innerWidth;

  sections.forEach((section) => {
    let neededSectionText = section.className;

    if (neededSectionText === classito) {
      if (neededSectionText !== "home") {
        if (viewportWidth < 486) {
          console.log("it is true");
          scrollToTargetAdjusted(section);

          // sideMenu.classList.toggle("menu-active");
          // linksAppear();
          // menuBtn.classList.toggle("toggle");
        } else {
          section.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      } else {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        if (window.innerWidth < 486) {
          sideMenu.classList.toggle("menu-active");
          linksAppear();
          menuBtn.classList.toggle("toggle");
        }
      }
    }
  });

  // console.log(selectedMenu);
};

/// EVENT LISTENERS

//  menu link click listeners
menuLinks.forEach((selectedLink) => {
  selectedLink.addEventListener("click", function (e) {
    e.preventDefault();
    let classito = selectedLink.getAttribute("data-page");

    // console.log(classito);

    animateMenu(classito);

    scrollToSection(classito, e);
  });
});

//Intersection observer to observe sections

const options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      let menuItem = entry.target.getAttribute("data-index");
      animateMenu(className);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

//RESPONSIVE NAVBAR

//responsive links appear
const linksAppear = function () {
  const navLinks = menuLinks;
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
};

//responsive animation
const navSlide = () => {
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("menu-active");
    linksAppear();
    menuBtn.classList.toggle("toggle");
  });
};

let mainAll = document.querySelector("main");

mainAll.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (
    !e.target.classList.contains("menu-active") &&
    e.target.className !== "par-menu"
  ) {
    sideMenu.classList.remove("menu-active");
    menuBtn.classList.remove("toggle");

    if (window.innerWidth < 486) {
      linksAppear();
    }
  }
});

navSlide();

//home button scroll
homeTextBtn.addEventListener("click", (e) => {
  let viewportWidth = window.innerWidth;
  if (viewportWidth < 486) {
    scrollToTargetAdjusted(projectSection);
  } else {
    projectSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
});

//contact-btn scroll
contactBtn.addEventListener("click", (e) => {
  let viewportWidth = window.innerWidth;
  if (viewportWidth < 486) {
    scrollToTargetAdjusted(contactSection);
  } else {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
});
