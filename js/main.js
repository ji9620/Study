/*
input으로 이름을 받으면, getName에 넣고 
keyup 이벤트가 발생하면, 엔터(keyCode = 13)와 비교하여
일치할 경우에 
"> Hello, " + name + "!" + "<br>" + "> Click the icons below!"의 형식으로
div 태그에 문자열을 전달합니다.
innerHTML의 사용으로 기존의 페이지 내부에 문자열이 나타납니다.
*/
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

//
var warning;
var getWarning = document.querySelector("#warning");

warning.onclick = banned;

function banned() {
  alert("접근할 수 없습니다.");
}
