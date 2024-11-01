

const egypt = document.querySelector('.egypt');
const fade = document.querySelector('.fade');  // opacity goes from 0 to 1
const earth = document.querySelector('.earth'); // highlights current location
let sliderImages = document.querySelectorAll(".mySlides");
let arrowLeft = document.querySelector(".fa-chevron-left");
let arrowRight = document.querySelector(".fa-chevron-right");
let current = 0;


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliderImages.length) {slideIndex = 1}
  sliderImages[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 17000); // Change image every 2 seconds
}


// Init slider
function startSlide() {
  sliderImages[i].style.display = "block";
}


function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
} 

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}


arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current--;
    current = sliderImages.length;
  }
  slideLeft();
});


arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current++;
    current = -1;
  }
  slideRight();
}); 

startSlide();

// https://www.google.com/search?sca_esv=4a15a4908bf04efe&q=barracuda+lake&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjntv2Rz8CEAxX-EFkFHbjkAZcQ0pQJegQIDRAB&biw=1366&bih=633&dpr=1
// https://www.youtube.com/watch?v=s0l25LNmYT8
// https://www.youtube.com/watch?v=IY9FTd1F0Uo
// https://www.youtube.com/watch?v=oUCQH11m-yY
// https://www.youtube.com/watch?v=SpHDX98K41k
// https://www.youtube.com/watch?v=iTefkqYQz8g
// better ideas - how to quickly get out of a rut
// https://www.youtube.com/watch?v=nHv6dAFWEAQ
// https://www.youtube.com/watch?v=Ot7Nsi_QkuM
// https://sourceforge.net/projects/xampp/
