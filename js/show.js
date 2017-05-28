
var myVar = document.getElementById('show');

function mostrar() {
    myVar = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  document.getElementById("show").style.display = "flex";
}