// 기본 조건문
// if (수행조건) {
//     수행하고 싶은 일
// }

const cl = console.log;

// if (true) {
//     cl("무조건 참입니다.");
// }

var num = 5;

if (num > 10) {
  cl("입력한 값은 10보다 큽니다.");
}

if (num < 10) {
  cl("입력한 값은 10보다 작습니다.");
}

if (num == 10) {
  cl("입력한 값은 10입니다.");
}

// 이러한 방식은 좋은 방식이 아님
// if ~ else 구문 사용
if (num > 10) {
  cl("입력한 값은 10보다 큽니다.");
} else {
  cl("입력한 값은 10보다 크지 않습니다");
}
