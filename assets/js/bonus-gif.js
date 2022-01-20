//vars

const warningText = document.querySelector(".warning-text");

//GIF fetching - searching part

const ShowGifs = () => {
  let inputValue = document.querySelector("#searchGifInput");
  let submitButton = document.querySelector("#new-gif");
  let getCatBtn = document.querySelector("#random-cat");

  let searchForm = document.querySelector("#gif-info form");
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
      warningText.innerText =
        "You search field is empty. Please enter your query";
      warningText.style = "display:block;";
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
      inputValue.value = "";
      warningText.innerText = "";

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
    gifWrapper.style.backgroundPosition = "center";
    gifWrapper.style.backgroundRepeat = "no-repeat";
    gifWrapper.style.backgroundSize = "contain";
  };

  makeGif(giphyURL);
};

window.addEventListener("load", (e) => {
  ShowGifs();
});
