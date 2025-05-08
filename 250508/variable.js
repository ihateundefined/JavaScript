const cl = console.log;

// 변수

// var 사용 기준 : 함수
// let 사용 기준 : 중괄호

/*
// var 사용 주의
function myTestVar() {
  if (true) {
    var xVar = 100;
  }
  cl(xVar);
}
myTestVar();
*/

/*
// let 사용 차이점
function myTestLet() {
  if (true) {
    // ReferenceError: xLet is not defined
    let xLet = 100;
  }
  cl(xLet);
}
myTestLet();
*/

/*
// 상수
// js는 객체의 주소를 넘김, 단순히 값을 넘겨주는게 아님
function myConst() {
  if (true) {
    const x = 100;
    // TypeError: Assignment to constant variable.
    x = 200;
  }
  cl(x);
}
myConst();
*/
