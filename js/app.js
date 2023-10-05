//Splash screen awal
const splash = document.querySelector('.splash');
const onboarding = document.querySelector('.onboarding');
const slideshow = document.querySelector('.slideshow');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        onboarding.classList.remove('display-none');
    }, 2000);

    setTimeout(() => {
        onboarding.classList.add('display-none');
        slideshow.style.display = 'block';
    }, 7000);
});

// Hide the slideshow initially
slideshow.style.display = 'none';

//Carousel text
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 4000);

// Carousel Image
var imageSlideIndex = 0;
showImageSlides();

function showImageSlides() {
  var i;
  var imageSlides = document.getElementsByClassName("imgSlide");

  for (i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = "none";
  }
  
  imageSlideIndex++;
  
  if (imageSlideIndex > imageSlides.length) {
    imageSlideIndex = 1;
  }
  
  imageSlides[imageSlideIndex-1].style.display = "block";
  
  setTimeout(showImageSlides, 4000);
}
