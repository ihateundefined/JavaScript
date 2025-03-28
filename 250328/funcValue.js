/*
// wed까지만 출력
function week() {
  console.log("mon");
  console.log("tue");
  console.log("wed");
  return;
  console.log("thu");
  console.log("fri");
  console.log("sat");
  console.log("sun");
};

week();
*/

/*
// 일반적인 함수의 대입
function nickName() {
  console.log("바바바");
};
nickName();
*/

/*
// 변수를 마치 함수처럼 호출
// 익명 함수
var nickName = function () {
  console.log("바바바");
};
nickName();
*/

var nickName = function () {
  console.log("하하하");
};

nickName();

/*
nickName = function () {
  console.log("라라라");
};

nickName();
*/

// userName이라는 변수에 함수 포인터를 담음
var userName = nickName;
userName();
