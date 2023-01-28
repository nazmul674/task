console.log("Model press testing..okay");
var modal = document.getElementById("myModal");
var innerbtn = document.getElementById("innerbtn");
var button = document.getElementById("myBtn");
var upldstatus = document.getElementById("upldstatus");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("upldstatus").style.color = "green";
  upldstatus.textContent = " Upload Status";
};

let btn = document.getElementById("btnid");
btn.addEventListener("click", function handleClick() {
  document.getElementById("upldstatus").style.color = "red";
  upldstatus.textContent = " File is Uploaded.Please Refresh";

  // alert("Please Refresh the page!");
});

// modal window close even if anywhere outside model clicked
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("upldstatus").style.color = "green";
    upldstatus.textContent = " Upload Status";
  }
};
