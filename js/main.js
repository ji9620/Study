var name;
var getName = document.querySelector("#name");

getName.onkeyup = isEnter;

function isEnter() {
  if (window.event.keyCode == 13) {
    document.getElementById("result").innerHTML =
      "> Hello, " + name + "!" + "<br>" + "> Click the icons below!";
  } else {
    name = document.getElementById("name").value;
  }
}
