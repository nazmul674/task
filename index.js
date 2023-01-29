// TASK 2
// JS MODAL just for the first attachment

console.log("Model press testing..okay");
var modal = document.getElementById("myModal");

var button = document.getElementById("myBtn");
var upldstatus = document.getElementById("upldstatus");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  // document.getElementById("upldstatus").style.color = "green";
  // upldstatus.textContent = " Upload Status";
};

let btn = document.getElementById("btnid");
btn.addEventListener("click", function handleClick() {
  document.getElementById("upldstatus").style.color = "green";
  upldstatus.textContent = " File is Uploaded.Please Refresh the page!";

  // alert("Please Refresh the page!");
});

// modal window close even if anywhere outside model clicked
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function preview() {
  var totalFiles1 = $("#fileImg1").get(0).files.length;

  for (var i = 0; i < totalFiles1; i++) {
    $("#preview").append(
      "<img src = '" + URL.createObjectURL(event.target.files[i]) + "'>"
    );
  }
}

// TASK 3
/* File Uploading API just for the first attachment*/
function submitData() {
  $(document).ready(function () {
    var formData = new FormData();
    var filesLength1 = document.getElementById("fileImg1").files.length;
    for (var i = 0; i < filesLength1; i++) {
      formData.append(
        "fileImg[]",
        document.getElementById("fileImg1").files[i]
      );
    }
    var filesLength2 = document.getElementById("fileImg2").files.length;
    for (var i = 0; i < filesLength2; i++) {
      formData.append(
        "fileImg[]",
        document.getElementById("fileImg2").files[i]
      );
    }
    var filesLength3 = document.getElementById("fileImg3").files.length;
    for (var i = 0; i < filesLength3; i++) {
      formData.append(
        "fileImg[]",
        document.getElementById("fileImg3").files[i]
      );
    }
    $.ajax({
      url: "http://localhost/PHP/Task/filesubmit.php",
      type: "post",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        alert(response);
        // window.alert("Win");
      },
    });
  });
}
