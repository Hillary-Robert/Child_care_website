
let arrow = document.getElementById("arrow"); 
let arrowdown = document.getElementById("arrow-down"); 
let click = document.getElementById("click"); 
let contactSection = document.getElementById("contact-section");


arrow.addEventListener("click", function () {
  contactSection.style.display = "block";
  arrow.style.display = "none";
  arrowdown.style.display = "block";
  click.style.display = "none"
});

arrowdown.addEventListener("click", function () {
  contactSection.style.display = "none";
  arrow.style.display = "block";
  arrowdown.style.display = "none";
  click.style.display = "block"
});