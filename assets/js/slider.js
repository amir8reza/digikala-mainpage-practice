// header slider codes
const slides = document.querySelectorAll(".slideshow-img");
const maxCounter = slides.length - 1;
let counter = 0;

//making images stay side by side
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

//functions for header slides
function slideImage() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

function goNextSlide() {
  if (counter < maxCounter) {
    counter++;
    slideImage();
  } else {
    counter = 0;
    slideImage();
  }
  clearInterval(slideTimer);
  slideTimer = setInterval(goNextSlide, 3000);
}

function goPrevSlide() {
  if (counter > 0) {
    counter--;
    slideImage();
  } else {
    counter = maxCounter;
    slideImage();
  }
  clearInterval(slideTimer);
  slideTimer = setInterval(goNextSlide, 3000);
}

let slideTimer = setInterval(goNextSlide, 5000);

// Suggestion Section Buttons
function onScrollSlide(direction) {
  let scrollValue = 300;
  if (direction === "left") {
    scrollValue = -300;
  }

  product_items.scrollBy({
    top: 0,
    left: scrollValue,
    behavior: "smooth",
  });
}
