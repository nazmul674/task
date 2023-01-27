console.log("Model press testing..okay");
var modal = document.getElementById("myModal");
var innerbtn = document.getElementById("innerbtn");
var button = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// modal window close even if anywhere outside model clicked
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
