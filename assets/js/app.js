//intersection observer

let contactSection = document.querySelector("#contact-section");
let sections = document.querySelectorAll("section");
let headerAll = document.querySelector("header");
let logoTxt = document.querySelector("#top-logo-text");
const menuLinks = document.querySelectorAll("#nav-menu li");

// (F) function to set animation to menu and to create a heading

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

///add event listener for each Menu Link

menuLinks.forEach((selectedLink) => {
  selectedLink.addEventListener("click", function (e) {
    e.preventDefault();
    let classito = selectedLink.getAttribute("data-page");
    animateMenu(classito);

    //scroll into view

    const scrollToSection = function (classito) {
      let selectedMenu = e.target.innerText;

      sections.forEach((section) => {
        let neededSectionText = section.className;
        if (neededSectionText === classito) {
          if (neededSectionText !== "home") {
            section.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          } else {
            section.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }
        }
      });

      // console.log(selectedMenu);
    };

    scrollToSection(classito);
  });
});

//Define observer to observe sections

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

//GIF fetching - searching part

const ShowGifs = () => {
  let inputValue = document.querySelector("#searchGifInput");
  let submitButton = document.querySelector("#new-gif");
  let getCatBtn = document.querySelector("#random-cat");
  let searchTag;

  submitButton.addEventListener("click", function (e) {
    searchForGif(e);
  });
  getCatBtn.addEventListener("click", function (e) {
    makeGif(giphyURL);
  });

  function searchForGif(e) {
    e.preventDefault();

    if (inputValue.value === "") {
      console.log("you need to input something");
    } else {
      searchTag = inputValue.value;
      console.log(searchTag);

      const giphy1 = {
        baseURL: "https://api.giphy.com/v1/gifs/random",
        apiKey: "mGmrfDbbOIgMoIxqwsuGSFUDPh1XRDwU",
        tag: searchTag,
        type: "gif",
        limit: 1,
        rating: "g",
      };

      let giphyURL1 = encodeURI(
        giphy1.baseURL +
          "?api_key=" +
          giphy1.apiKey +
          "&tag=" +
          giphy1.tag +
          "&rating=" +
          giphy1.rating
      );

      makeGif(giphyURL1);
    }
  }

  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/random",
    apiKey: "mGmrfDbbOIgMoIxqwsuGSFUDPh1XRDwU",
    tag: "cute+cat",
    type: "gif",
    limit: 1,
    rating: "g",
  };

  let giphyURL = encodeURI(
    giphy.baseURL +
      "?api_key=" +
      giphy.apiKey +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
  );

  // console.log(giphyURL + " is the url from where fetch gets data");

  const getGifs = async function (url) {
    //fetch data
    // console.log(url);
    const response = await fetch(url);
    const gifs = await response.json();
    const bestData = gifs.data.images.original.url;
    //catch error
    //serve backup gif and remove button
    return bestData;
  };

  let gifWrapper = document.querySelector("#gif-canvas");
  let newGifButton = document.querySelector("#new-gif");

  const makeGif = async function (url) {
    const newGifUrl = await getGifs(url);
    gifWrapper.style.background = `url("${newGifUrl}")`;
    gifWrapper.style.backgroundPosition = "right";
    gifWrapper.style.backgroundRepeat = "no-repeat";
    gifWrapper.style.backgroundSize = "contain";
  };

  makeGif(giphyURL);

  // newGifButton.addEventListener("click", async function () {
  //   makeGif(giphyURL);
  // });
};

window.onload = ShowGifs();

// document.addEventListener("DOMContentLoaded", function (event) {
//   var scrollpos = localStorage.getItem("scrollpos");
//   if (scrollpos) window.scrollTo(0, scrollpos);
// });

// window.onbeforeunload = function (e) {
//   localStorage.setItem("scrollpos", window.scrollY);
// };
