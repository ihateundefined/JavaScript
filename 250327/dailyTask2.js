/*
Array 객체를 사용하여 배열을 선언한다.
사용자로부터 두 개의 숫자값을 입력 받아 배열에 저장하고 두 수를 비교하여 큰 수를 출력하도록 하자. 
단, 두 수를 비교하여 큰 수를 출력하는 기능은 함수로 처리한다.
함수의 이름은 Max라고 정하자.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];

function Max(int1, int2) {
  if (int1 > int2) {
    return int1;
  } else if (int1 < int2) {
    return int2;
  } else {
    return int1;
  }
}

rl.question("배열에 넣을 첫 번째 숫자를 입력해 주세요 : ", function (num1) {
  rl.question("배열에 넣을 두 번째 숫자를 입력해 주세요 : ", function (num2) {
    arr.push(Number(num1), Number(num2));
    console.log(arr);

    var result = Max(arr[0], arr[1]);
    console.log("둘 중 큰 수는? >> " + result);

    rl.close();
  });
});
