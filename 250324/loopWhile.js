const cl = console.log;

/*
// for문으로 월 출력하기
for (var i = 1; i < 13; i++) {
    cl(i+"월");
}
*/

/*
// while문으로 월 출력하기
var month = 1;
while (month < 13) {
  cl(month + "월");
  month++;
}
*/

/*
// 1부터 10까지의 합 ... while문으로 구하기
var sum = 0;
var numb = 1;
while (numb < 11) {
  sum += numb;
  numb++;
}
cl(sum);
*/

/*
// while문으로 구구단 2단 출력하기
var dan = 2;
var i = 1;
while (i < 10)
{
    cl(dan + " * " + i + " = " + dan * i);
    i++;
}
*/

/*
// 사용자에게 입력받은 단의 구구단 출력하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("출력하고 싶은 단을 입력하세요: ", (dan) => {
  cl("**** " + dan + "단을 출력합니다 ****");
  var i = 1;
  while (i < 10) {
    cl(dan + " * " + i + " = " + dan * i);
    i++;
  }
  rl.close();
});
*/
