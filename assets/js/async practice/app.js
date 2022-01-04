const ShowGifs = () => {
  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/random",
    apiKey: "mGmrfDbbOIgMoIxqwsuGSFUDPh1XRDwU",
    tag: "contact",
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

  console.log(giphyURL + " is the url from where fetch gets data");

  const getGifs = async function () {
    //fetch data
    const response = await fetch(giphyURL);
    const gifs = await response.json();
    const bestData = gifs.data.images.original.url;
    //catch error
    //serve backup gif and remove button
    return bestData;
  };

  let gifWrapper = document.querySelector("#gif-itself");
  let newGifButton = document.querySelector("#newGifButton");

  const makeGif = async function () {
    const newGifUrl = await getGifs();
    gifWrapper.style.background = `url("${newGifUrl}")`;
    gifWrapper.style.backgroundPosition = "center";
    gifWrapper.style.backgroundRepeat = "no-repeat";
    gifWrapper.style.backgroundSize = "contain";
  };

  makeGif();

  newGifButton.addEventListener("click", async function () {
    makeGif();
  });

  // gifWrapper.style.background = `url("https://images.unsplash.com/photo-1638629632141-5cd55b3af4fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")`;

  //   function getGifs() {
  //     fetch(giphyURL)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         let gifs = result.data;
  //         // console.log(gifs + " from inside the function");
  //       });
  //     // return result;
  //   }

  //   let testingGif = getGifs();
  //   console.log(testingGif);

  //   let newGif = getGifs();

  //   fetch(giphyURL)
  //     .then(function (response) {
  //       const data = response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     });

  //   const showData = async (data) => {
  //     let getHere = await data;
  //     console.log(getHere);
  //   };
  //   showData();
  //   const fetchData = async () => {
  //     const response = await fetch(giphyURL);
  //     console.log(response.json());
  //   };
  //   fetchData();
};

window.onload = ShowGifs();

// const giphy = {
//   baseURL: "https://api.giphy.com/v1/gifs/",
//   apiKey: "mGmrfDbbOIgMoIxqwsuGSFUDPh1XRDwU",
//   tag: "fail",
//   type: "random",
//   rating: "pg-13",
// };
