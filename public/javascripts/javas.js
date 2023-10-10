// javas.js HARVEND TAURIES 301251124, 9/10/2023
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting

    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  })