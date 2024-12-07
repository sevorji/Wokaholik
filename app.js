
// Get the container element
var activePage = document.getElementById("navul");

// Get all buttons with class="Alink-nav" inside the container
var activeContainer = activePage.getElementsByClassName("Alink-nav");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < activeContainer.length; i++) {
  activeContainer[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
