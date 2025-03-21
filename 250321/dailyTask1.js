// 사용자로부터 두 개의 정수를 입력 받는다.
// 입력한 두 정수를 그대로 출력하는 프로그램을 작성하라.

// 입력창은 var score = prompt("입력");
// 각 수의 형변환(타입캐스팅)은 Number(score) 와 같이 하면 됩니다.

const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("첫 번째 정수를 입력하세요 >>> ", function (input1) {
  const num1 = Number(input1);

  rl.question("두 번째 정수를 입력하세요 >>> ", function (input2) {
    const num2 = Number(input2);

    cl("첫번째 정수는 >> " + num1);
    cl("두번째 정수는 >> " + num2);

    rl.close();
  });
});
