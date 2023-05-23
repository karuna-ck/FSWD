ocument.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to the navigation links
    var navLinks = document.querySelectorAll(".ul li a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Add your logic here for handling navigation link clicks
      });
    }
  
    // Add click event listener to the buttons
    var buttons = document.querySelectorAll(".btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        // Add your logic here for handling button clicks
      });
    }
  
    // Add click event listeners to the social icons
    var socialIcons = document.querySelectorAll(".socialIcons a");
    for (var i = 0; i < socialIcons.length; i++) {
      socialIcons[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Add your logic here for handling social icon clicks
      });
    }
  });
  // Get the modal element
var modal = document.getElementById("myModal");

// Get the image and modal content elements
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("modalImage");

// Add a click event listener to each image
images.forEach(function(image) {
    image.addEventListener("click", function() {
        // Display the modal
        modal.style.display = "block";
        
        // Set the image source in the modal
        modalImg.src = this.src;
    });
});

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// Add a click event listener to the close button
closeBtn.addEventListener("click", function() {
    // Hide the modal when the close button is clicked
    modal.style.display = "none";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});