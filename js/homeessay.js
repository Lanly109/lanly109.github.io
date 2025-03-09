setTimeout(() => {
  let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
    passiveListeners: true,
    direction: "vertical",
    loop: true,
    autoplay: {
      disableOnInteraction: true,
      delay: 3000,
    },
    mousewheel: true,
  });

  let essay_bar_container = document.getElementById("bber-talk");
  if (essay_bar_container !== null) {
    essay_bar_container.onmouseenter = function () {
      essay_bar_swiper.autoplay.stop();
    };
    essay_bar_container.onmouseleave = function () {
      essay_bar_swiper.autoplay.start();
    };
  }
}, 100);
