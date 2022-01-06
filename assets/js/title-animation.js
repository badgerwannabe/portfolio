//ANIME JS - CODING ANIMATION

// Create a timeline with default parameters
let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 100,
});

// Add children

//FIRST LINE
anime(
  {
    targets: ".code-line:nth-child(1) .code-el-1",
    width: 70,
    easing: "easeInOutQuad",
  },
  50
);
// SECOND LINE
tl.add({
  targets: ".code-line:nth-child(2) .code-el-2:nth-child(2)",
  width: 140,
  easing: "easeInOutQuad",
}).add({
  targets: ".code-line:nth-child(2) .code-el-3:nth-child(3)",
  width: 95,
  easing: "easeInOutQuad",
});
// THIRD LINE

tl.add({
  targets: ".code-line:nth-child(3) .code-el-1:nth-child(1)",
  width: 145,
  easing: "easeInOutQuad",
  offset: 0,
}).add({
  targets: ".code-line:nth-child(3) .code-el-2:nth-child(2)",
  width: 95,
  easing: "easeInOutQuad",
});

// FOURTH LINE
tl.add({
  targets: ".code-line:nth-child(4) .code-el-3:nth-child(1)",
  width: 220,
  easing: "easeInOutQuad",
}).add({
  targets: ".code-line:nth-child(4) .code-el-4:nth-child(2)",
  width: 80,
  easing: "easeInOutQuad",
});

// FIFTH LINE
tl.add(
  {
    targets: ".code-line:nth-child(5) .code-el-2:nth-child(1)",
    width: 90,
    easing: "easeInOutQuad",
  },
  150
);

// SIXTH LINE
anime(
  {
    targets: ".code-line:nth-child(6) .code-el-4:nth-child(1)",
    width: 160,
    easing: "easeInOutQuad",
  },
  350
);
// SEVENTH LINE
tl.add(
  {
    targets: ".code-line:nth-child(7) .code-el-3:nth-child(1)",
    width: 140,
    easing: "easeInOutQuad",
  },
  0
)
  .add(
    {
      targets: ".code-line:nth-child(7) .code-el-2:nth-child(2)",
      width: 45,
      easing: "easeInOutQuad",
    },
    300
  )
  .add(
    {
      targets: ".code-line:nth-child(7) .code-el-2:nth-child(3)",
      width: 45,
      easing: "easeInOutQuad",
    },
    500
  );

// EIGHTH LINE
anime({
  targets: ".code-line:nth-child(8) .code-el-1:nth-child(1)",
  width: 115,
  easing: "easeInOutQuad",
});

// NINTH LINE
tl.add(
  {
    targets: ".code-line:nth-child(9) .code-el-2:nth-child(1)",
    width: 86,
    easing: "easeInOutQuad",
  },
  400
)
  .add(
    {
      targets: ".code-line:nth-child(9) .code-el-4:nth-child(2)",
      width: 120,
      easing: "easeInOutQuad",
    },
    600
  )
  .add(
    {
      targets: ".code-line:nth-child(9) .code-el-2:nth-child(3)",
      width: 67,
      easing: "easeInOutQuad",
    },
    700
  );

// TENTH LINE
anime({
  targets: ".code-line:nth-child(10) .code-el-4:nth-child(1)",
  width: 115,
  easing: "easeInOutQuad",
});

tl.add(
  {
    targets: ".code-line:nth-child(11) .code-el-1:nth-child(1)",
    width: 40,
    easing: "easeInOutQuad",
  },
  500
)
  .add(
    {
      targets: ".code-line:nth-child(11) .code-el-2:nth-child(2)",
      width: 105,
      easing: "easeInOutQuad",
    },
    600
  )
  .add(
    {
      targets: ".code-line:nth-child(11) .code-el-3:nth-child(3)",
      width: 64,
      easing: "easeInOutQuad",
    },
    700
  );

//ANIME JS - EFFECTS ANIMATION

//all elements start appearing with opacity + all lines start drawing themselves

anime({
  targets: ".animation-items",
  opacity: 1,

  easing: "easeInOutBack",
  duration: 2500,
});

const leftYellowLines = document.querySelectorAll(
  ".narrow-text-block .long-yel-line"
);
const rightYellowLines = document.querySelectorAll(
  ".big-text-block .long-yel-line"
);

let animateLeftLines = anime.timeline({
  easing: "easeOutExpo",
  duration: 2000,
});

let animateRightLines = anime.timeline({
  easing: "easeOutExpo",
  duration: 2000,
});

const drawLinesAnime = function (lines, timeline) {
  lines.forEach((el, index) => {
    console.log(lines.length);
    let multiplier = 50 * index;
    let deblay;

    if (lines.length > 5) {
      anime({
        targets: ".narrow-text-block .short-yel-line",
        width: "60%",
        opacity: 1,
        easing: "easeInSine",
        duration: 500,
      });

      if (multiplier > 400) {
        multiplier = 400;
        deblay = 0;
      }
    } else {
      multiplier = 800;
      deblay = 800;
      console.log("here");
      anime({
        targets: ".big-text-block .short-yel-line",
        width: "60%",
        opacity: 1,
        easing: "easeInSine",
        delay: 800,
      });
    }

    timeline.add(
      {
        targets: el,
        width: "100%",
        delay: deblay,
        opacity: 1,
        easing: "easeInSine",
        duration: 500,
      },
      `-=${multiplier}`
    );
  });
};
drawLinesAnime(leftYellowLines, animateLeftLines);
drawLinesAnime(rightYellowLines, animateRightLines);

anime({
  targets: ".block-1",
  translateZ: 40,
  translateX: -2,
  translateY: -2,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  duration: 2000,
});

anime({
  targets: ".player-icon",
  translateY: 7,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  duration: 1500,
});
anime({
  targets: ".card",
  rotate: 0,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 1500,
  opacity: 1,
});
anime({
  targets: ".circle",
  translateY: -60,
  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 1000,
  delay: 500,
});
anime({
  targets: ".short-white-line",
  translateY: 60,
  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 1000,
  delay: 500,
});

anime({
  targets: ".video-player-animation",

  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 1000,
  delay: 100,
});
anime({
  targets: ".player-container",

  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 2000,
});
anime({
  targets: ".narrow-text-block",

  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 2000,
});

anime({
  targets: ".big-text-block",

  opacity: 1,
  // loop: true,
  direction: "normal",
  easing: "easeInOutSine",
  duration: 2000,
});
