/*
91 이상 100 이하면 ‘A학점’, 
81 이상 90 이하면 ‘B학점’, 
71 이상 80 이하면 ‘C학점’,
61 이상 70 이하면 ‘D학점’, 
0 이상 60 이하면 ‘F학점’, 
그 외에 점수의 범위를 벗어나는 경우에는 메시지 출력
*/

const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("점수를 입력하세요 : ", function (score) {
  var score = Number(score);

  switch (true) {
    case score >= 91 && score <= 100:
      cl("A학점");
      break;
    case score >= 81 && score <= 90:
      cl("B학점");
      break;
    case score >= 71 && score <= 80:
      cl("C학점");
      break;
    case score >= 61 && score <= 70:
      cl("D학점");
      break;
    case score >= 0 && score <= 60:
      cl("F학점");
      break;
    default:
      cl("점수의 범위를 벗어났습니다.");
      break;
  }
  rl.close();
});
