// Initialize Typed.js for typing effect
var typed = new Typed(".typing", {
  strings: ["Developer", "Melophile", "Sketch-Designer", "Hodophile"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Highlight active navigation link on hash change

// ...

// Highlight active navigation link on hash change
const navLinks = document.querySelectorAll('.nav li a');

window.addEventListener('hashchange', () => {
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      // Store the current hash value in localStorage
      localStorage.setItem('currentHash', window.location.hash);
    } else {
      link.classList.remove('active');
    }
  });
});

// Highlight active navigation link on page load
window.addEventListener('load', () => {
  const storedHash = localStorage.getItem('currentHash');
  if (storedHash) {
    // If a hash value is stored, use it to highlight the correct menu item
    navLinks.forEach((link) => {
      if (link.href === `${window.location.origin}${storedHash}`) {
        link.classList.add('active');
      }
    });
  } else {
    // If no hash value is stored, highlight the first menu item
    navLinks[0].classList.add('active');
  }
});

// ...
// Show or hide the "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 200) { // Show after scrolling down 200px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate progress bars when they are in view
const progressBars = document.querySelectorAll('.progress-in');

// Function to animate progress bars
function animateProgressBars(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const percentage = progressBar.dataset.percentage;
      progressBar.style.setProperty('width', `${percentage}%`);
      observer.unobserve(progressBar); // Stop observing once animated
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(animateProgressBars, {
  threshold: 0.1 // Trigger animation when 10% of the progress bar is visible
});

// Observe each progress bar
progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});
function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Name validation
  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("Please enter a valid name (only letters and spaces allowed).");
    return false;
  }

  // Email validation
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address (e.g. example@gmail.com).");
    return false;
  }

  // Check if all fields are filled in
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields before sending the email.");
    return false;
  }

  let parms = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  }

  emailjs.send("service_pzbx1j7", "template_z72odwh", parms).then(() => {
    alert("Email Sent Successfully");
    // Clear the contact form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  });
}