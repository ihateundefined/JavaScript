/*
사용자로부터 문자 한 개를 입력 받는다.
문자는 ‘y’ 또는 ‘n’ 둘 중에 하나의 문자를 입력한다.
만약 입력한 값이 ‘y’라면 “네, 드라이브를 포멧하겠습니다.”를 출력하고,
입력한 값이 ‘n’이라면 “아니오, 드라이브를 포멧하겠습니다.”를 출력하시오.
출력 예) 정말로 이 드라이브를 포멧하시겠습니까?(y/n) y 네, 드라이브를 포멧하겠습니다.
*/

const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("정말로 이 드라이브를 포멧하시겠습니까? (y/n) : ", function (character) {
  switch (character) {
    case "y":
      cl("네, 드라이브를 포멧할게요");
      break;
    case "n":
      cl("아니오, 드라이브를 포멧할게요!");
      break;
    default:
      cl("y/n 중에 입력해주세요");
      break;
  }
  rl.close();
});