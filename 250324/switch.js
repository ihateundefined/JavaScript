const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
// 단축키 입력받기
rl.question("단축키를 입력하세요 : ", function (hotkey) {
  // number 데이터 타입이 숫자형이라는 의미
  // parseInt 함수로 문자열을 숫자로 변환
  switch (parseInt(hotkey)) {
    case 1:
      cl("엄마에게 전화하기");
      break;
    case 2:
      cl("아빠에게 전화하기");
      break;
    case 3:
      cl("할머니에게 전화하기");
      break;
    default:
      cl("없는 단축키입니다.");
      break;
  }
  rl.close();
});
*/

// 키오스크 예제
rl.question("커피를 선택하세요 : ", function (coffee) {
  switch (coffee) {
    case "아메리카노":
      cl("아메리카노 주문 완료");
      break;
    case "카페라떼":
      cl("카페라떼 주문 완료");
      break;
    case "카푸치노":
      cl("카푸치노 주문 완료");
      break;
    default:
      cl("없는 메뉴입니다.");
      break;
  }
  rl.close();
});
