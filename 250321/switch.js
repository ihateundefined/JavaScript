const cl = console.log;

/*
// switch문
var n = 2;

switch (n) {
  case 1:
    cl("1번을 고르셨네요!");
    break;
  case 2:
    cl("2번을 고르셨네요!");
    break;
  default:
    cl("목록에 있는 숫자를 안 고르셨네요!");
    break;
}
*/

// 사용자에게 입력 받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("데이터를 입력하세요 (y/n) : ", function (character) {
  switch (character) {
    case "y":
      cl("드라이브를 포멧할게요");
      break;
    case "n":
      cl("그래요? 하지만 저는 드라이브를 포멧할게요!");
      break;
    default:
      cl("y/n 중에 입력해주세요");
      break;
  }
  rl.close();
});
