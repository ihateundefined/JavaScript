/*
// 매개변수 기본값 설정
var savedUser = "박준하"; // DB
var savedPW = '1111';

function account(userId = 'jamie', userPW = '1111')
{
    if (userId == savedUser) {
        if (userPW == savedPW) {
            console.log("반갑습니다 " + userId + ' 님');
            return;
        }
    }
    console.log('로그인에 실패했습니다');
}

account();
account("박준하");
account("박준하", '1111');
*/

/*
// 함수의 리턴값
function plus(a, b) {
    return (a + b);
}

var result = plus(10, 20);
console.log(result);
*/

// 함수의 리턴값
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkAge(age) {
  if (age > 19 && age <= 100) {
    return true;
  } else {
    return false;
  }
}

rl.question("나이를 입력하세요 >> ", function (age) {
  if (checkAge(age)) {
    console.log("입장 가능하세요");
  } else {
    console.log("입장을 불허합니다");
  }
  rl.close();
});
