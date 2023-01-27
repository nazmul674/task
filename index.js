console.log("Model press testing..okay");
var modal = document.getElementById("myModal");

var button = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
