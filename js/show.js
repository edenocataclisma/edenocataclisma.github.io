
var myVar = document.getElementById('show');

function mostrar() {
    myVar = setTimeout(alertFunc, 70000);
}

function alertFunc() {
  document.getElementById("show").style.display = "flex";
}