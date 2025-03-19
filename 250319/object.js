const cl = console.log;

var msg = {
  name: "상남자",
  comment: "포기를 모르는 상남자",
  age: 28,
};
var msg1 = {
  name: "상상남자",
  comment: "끈기있는 상상남자",
  age: 2,
};

// 빈 배열
// 동적메모리이므로 배열의 크기를 미리 정하지 않아도 된다.
// 자동으로 알아서 배열의 크기가 늘어난다.
// 이게 생략이 된 것임
// var arr = new Array();
var arr = [];
// 배열에 요소를 추가
// 배열이름.push(추가할 데이터)
arr.push(msg);
cl(arr);
cl("배열의 길이는 >> " + arr.length);

arr.push(msg1);
cl("배열의 길이는 >> " + arr.length);
cl("arr의 배열 >> ");
cl(arr);
cl(arr[0].name);
cl(arr[0].comment);
cl(arr[0].age);
