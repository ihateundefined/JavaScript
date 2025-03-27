/*
커피 자판기
100원 넣으면 ‘블랙커피’, 200원을 넣으면 ‘밀크커피’가 나온다.
자판기가 함수와 같은 블랙박스라고 했었다.
자판기를 함수로 구현해보자.
즉, 사용자로부터 정수형 가격(100, 200)을 입력 받아 100을 입력 받으면 ‘블랙커피’를 출력하고,
200을 입력 받으면 ‘밀크커피’를 출력하면 된다.
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "자판기입니다. 100원과 200원 중에 원하시는 금액을 골라 적어주세요 : ",
  function (price) {
    switch (Number(price)) {
      case 100:
        console.log("블랙커피");
        break;
      case 200:
        console.log("밀크커피");
        break;
      default:
        console.log("해당 금액에 맞는 메뉴가 없습니다.");
        break;
    }
    rl.close();
  }
);
