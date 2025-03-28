/*
숫자 배열을 인자로 받아 배열 내 최대값을 반환하는 함수를 작성하시오.
*/

var arr = [1, 2, 3, 4, 30, 20];

function maxNumber(arr) {
  var maxNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

var result = maxNumber(arr);

console.log("배열의 최댓값은 >> " + result);
