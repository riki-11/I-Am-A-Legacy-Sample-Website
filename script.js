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

if (document.getElementById('home-content')) {
  let scholarIntervals = document.querySelectorAll('[data-donation-interval][data-donation-type="scholar"]');
  let scholarOptions = document.querySelectorAll('[data-donation-type="scholar"]:not([data-donation-interval])');
  let treeIntervals = document.querySelectorAll('[data-donation-interval][data-donation-type="tree"]');
  let treeOptions = document.querySelectorAll('[data-donation-type="tree"]:not([data-donation-interval]');

  // Add an onclick event listener to all the donation options
  setActive(scholarIntervals);
  setActive(scholarOptions);
  setActive(treeIntervals);
  setActive(treeOptions);
}

// Function for adding active and inactive functionality to the donation card options
function setActive(allOptions) {

  allOptions.forEach(activeOption => {
    activeOption.addEventListener('click', () => {

      // First, set all the options to inactive
      allOptions.forEach(option => {
        option.classList.remove('active');
        option.classList.add('inactive');
      })

      // Then set the one just clicked to active
      activeOption.classList.remove('inactive');
      activeOption.classList.add('active');
    })
  })
}


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
