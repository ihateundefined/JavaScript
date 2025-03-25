/*
2의 배수를 화면에 출력하라. 단, 최대 범위는 100까지이다. (힌트, 구구단 2단 예제를 참고) 

	출력 예)
	2
	4
	6
	8
	….
	100
	for (var i = 1; i < 51; i++) {
		console.log(2 * i);
	}
*/

/*
반복문을 사용하여 1부터 사용자가 입력한 정수까지의 합을 출력하는 프로그램을 작성하라.
const cl = console.log;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("정수 입력하세요 >>> ", function (numb) {
  var numb = Number(numb);
  var sum = 0;
  
  for (var i = 1; i <= numb ; i++) {
    sum += i;
  }
  cl("입력한 수 까지 합은 >>> " + sum);
  
  rl.close();
});
*/

/*
Array 객체를 사용하여 길이가 3인 배열 arr1과 arr2를 선언한다.
arr1배열은 선언과 동시에 {1,2,3}으로 초기화하였다.
arr1을 arr2에 복사하되 역순으로 복사하고, arr2 배열의 요소를 모두 출력하라.

var arr1 = [1, 2, 3];
var arr2 = [];

for (var i = arr1.length - 1; i >= 0; i--) {
  arr2.push(arr1[i]);
}

console.log(arr2);
*/
