const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("당신의 나이를 입력하세요 >>> ", function (score) {
  var age = parseInt(score);

  if (age >= 19) {
    cl("당신은 성인입니다.");
  } else if (age >= 13) {
    cl("당신은 청소년입니다.");
  } else if (age >= 0) {
    cl("당신은 어린이입니다.");
  } else {
    cl("나이는 양의 정수로 입력하세요.");
  }

  rl.close();
});
