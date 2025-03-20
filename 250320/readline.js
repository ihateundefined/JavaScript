const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("프로그래밍 언어 이름을 입력하시오 : ", function (data) {
//   // 입력값에 대한 처리
//   cl("가장 좋아하는 프로그래밍 언어는 " + data + "입니다.");
//   rl.close();
// });

rl.question("정수를 입력하세요 : ", function (data) {
  var result = data % 2;
  if (result == 0) {
    cl("당신이 입력한 숫자는 " + data + "이며 짝수입니다.");
  } else {
    cl("당신이 입력한 숫자는 " + data + "이며 홀수입니다.");
  }
  rl.close();
});
