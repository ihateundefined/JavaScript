const cl = console.log;

/*
for (var i = 0; i < 50; i++) {
    // cl("javascript");
    // cl("*");

    // 2의 배수만 출력하기
    // cl((i + 1) * 2);
}
*/

/*
// 1부터 100까지 짝수만 출력하기
for (var i = 2; i <= 100; i += 2) {
    cl(i);
}
*/

/*
// 1부터 10까지의 합 구하기
var sum = 0;
for (var i = 1; i < 11; i++) {
    sum += i;
}
cl(sum);
*/

/*
// 구구단 2단 출력하기
for (var i = 1; i < 10; i++)
{
    cl("2 *",  i, " = ", 2 * i);
}
*/

/*
// 사용자로부터 입력받아서 구구단 출력하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("출력하고 싶은 단을 입력하세요 >> ", function (numb) {
  cl("구구단", numb, "단 출력하기 시작 >>");
  for (var i = 1; i < 10; i++) {
    cl(numb, " *", i, " = ", numb * i);
  }
  rl.close();
});
*/

/*
// 배터리 충전 상태
cl("배터리 충전 시작");
for (var charging = 0; charging < 101; charging++)
{
    cl("현재 배터리 충전 상태 :", charging, "%");
    cl("현재 배터리 충전 상태 : " + charging + " %");
}
cl("배터리 충전 완료");
*/

/*
// 메모리 재할당
// 배열 선언 방법
// 애초에 선언한 것에서 메모리 할당을 재할당함
// 배열의 크기를 미리 정하지 않아도 됨
var arr = ["javascript", "C언어", "파이썬"]; // var arr = new Array();

// 메모리를 재할당함 ... realloc
arr.push("java");
arr.push("C++");
arr.push("C#");
arr.push("HTML");
arr.push("CSS");

for (var i = 0; i < arr.length; i++) {
  cl(arr[i]);
}
*/
