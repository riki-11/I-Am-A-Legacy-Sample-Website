// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var nav = document.getElementById("navMenu");
  if (nav.className.indexOf("w3-show") == -1) {
    nav.className += " w3-show";
  }
  else {
    nav.className = nav.className.replace(" w3-show", "");
  }
}

/* Code for the slideshow/carousel */
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function moveDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('carousel-dot');

  if (n > slides.length) {
      slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  slides[slideIndex - 1].style.display = 'inline-block';
  dots[slideIndex - 1].className += " w3-white";
}


//just embed them in the website XD
// ooOOO maybe that's a better choice cos it'll make it faster to load 
// can ya send the link in the gc so we could maybe use it later on when we put videos?
//https://developers.facebook.com/docs/plugins/embedded-video-player/
//i found a way to get videos from facebook Xd without downloading  