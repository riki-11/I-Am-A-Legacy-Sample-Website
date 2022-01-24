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

if (document.getElementById('home-content') || document.getElementById('donate-section')) {
  let scholarIntervals = document.querySelectorAll('[data-donation-interval][data-donation-type="scholar"]');
  let scholarOptions = document.querySelectorAll('[data-donation-type="scholar"]:not([data-donation-interval])');
  let scholarValues = document.querySelectorAll('[data-donation-value]');

  let treeIntervals = document.querySelectorAll('[data-donation-interval][data-donation-type="tree"]');
  let treeOptions = document.querySelectorAll('[data-donation-type="tree"]:not([data-donation-interval]');

  // Add an onclick event listener to all the donation options
  setActive(scholarIntervals);
  setActive(scholarOptions);
  setValues(scholarIntervals);
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

// Function for setting the denominations for donations depending on the donation interval chosen
function setValues(intervals) {
  intervals.forEach(interval => {
      interval.addEventListener('click', () => {
          let activeInterval = document.querySelector('.active[data-donation-interval]').dataset.donationInterval; 
          let lowValue = document.querySelector('[data-donation-value="low"]');
          let mediumValue = document.querySelector('[data-donation-value="medium"]');
          let highValue = document.querySelector('[data-donation-value="high"]');

          if (activeInterval === 'once') {
              lowValue.innerHTML = '₱1000';
              mediumValue.innerHTML = '₱3000';
              highValue.innerHTML = '₱5000';
          }
          else if (activeInterval === 'monthly') {
              lowValue.innerHTML = '₱30';
              mediumValue.innerHTML = '₱90';
              highValue.innerHTML = '₱150';
          }
      })
  })
}