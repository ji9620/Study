//날짜를 계산합니다.
var now = new Date();
var birthday = new Date("1996-06-20");

var toNow = now.getTime();
var toBirth = birthday.getTime();
var passedTime = toNow - toBirth;

passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24 * 365.25)); //윤년이 있어 4년에 하루가 더해집니다.

document.querySelector("#result").innerText = "만 " + passedTime + "세";

//사진을 화면에 출력합니다.
var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");

for (i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  var bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
};
