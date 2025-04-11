// 문자열을 인자로 받아 첫 글자만 대문자로 변환한 후 반환하는 함수를 작성하라.
// 문자열 위치를 지정하는 기능은 문자열  내장 함수 중에 charAt()을,
// 문자열 자르는 기능은 slice(), 대문자 변환하는 기능은 toUpperCase() 함수를 사용하라.
function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var str = "abcde";
var result1 = upper(str);
console.log(result1);

// 주어진 배열에서 중복된 요소를 제거하는 JavaScript 함수를 작성하세요.
// 결과 배열은 중복이 제거된 순서로 정렬되어야 합니다.
// 배열은 정수 또는 문자열로 임의대로 입력하여 작성합니다. ex) {3,4,2,1,7}
function removeDuplicate(arr) {
  return [...new Set(arr)].sort();
}

var arr = [3, 4, 2, 1, 7, 3, 4, 7, 2, 5];
var result2 = removeDuplicate(arr);
console.log(result2);
