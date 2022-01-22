/*
날짜를 계산합니다.
1970년의 기준이 되는 시간부터 페이지가 로드된 시간까지의 밀리초를 toNow에
1996년 6월 20일부터 페이지가 로드된 시간까지의 밀리초를 toBirth에 넣습니다.
생일로부터 지난 시간에 곱셈 연산을 합니다. (ms > sec > min > hour > day > year) 
*/
var now = new Date();
var birthday = new Date("1996-06-20");

var toNow = now.getTime();
var toBirth = birthday.getTime();
var passedTime = toNow - toBirth;

//윤년이 있어 4년에 하루가 더해집니다.
passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24 * 365.25));

document.querySelector("#result").innerText = "만 " + passedTime + "세";

/*
사진을 화면에 출력합니다.
html 파일에서 사진을 pic class로 지정하고 DOM을 이용하여  pics에 pic인 요소를 가져옵니다.
div 태그에 lightbox라는 id를 줍니다.
div 태그 하위에 임시로 이미지를 하나 넣고 id를 lightboxImage로 설정 후 이 요소를 가져옵니다.
i 번째 이미지를 클릭하면, showLightbox 함수가 실행됩니다.
이미지의 속성을 가져와 data-src(라이트박스 내부에 표현하고 싶은 이미지)를 이미지의 src로 설정합니다.
페이지 내부에서 이미지 주위가 어둡게 표시되고 이미지가 표시됩니다.
라이트박스를 클릭하면 사라지고 다시 페이지가 보입니다.
*/
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
