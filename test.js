const cl = console.log;
// console.log("i want to go home seriously");
// var msg2 = "hello";
// var msg2 = new String("hello");

// 원래는 아래와 같은 방식으로 생성해야하지만 생략 되는 것
// var msg = new Number(10);

// class Number {
//   Number(num) {
//     number = num;
//   }
// }

// 예외적으로 사용 가능한 것
// var $ = 10;
// var _ = 20;
// console.log($ + _);

// cl("hello");
// var msg = "hello", count = 10, name = "홍길동";
// cl(msg, count, name);

// 타입 확인하기 ... typeof
// var myAge = 20;
// var myHeight = 170.1;
// cl(typeof myAge);
// cl(typeof myHeight);

// var kuk = 90;
// var eng = 80;
// var math = 70;

// // 객체를 더한다 ... + 오버로딩 된 것임
// var total = kuk + eng + math;
// var avg = total / 3;
// cl("총점 : " + total + "점");
// cl("평균 : " + avg + "점");

var a = "난" / 3;
cl(a); // NaN .. Not a Number .. 숫자가 아님
cl(typeof a); // number
