/*
숫자 배열을 인자로 받아 배열의 평균값을 반환하는 함수를 작성하라.
예) 배열  : [10, 20, 30, 40, 50]
*/

function average(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

var arr = [10, 20, 30, 40, 50];
var result = average(arr);
console.log("배열의 평균값은 >> " + result);
