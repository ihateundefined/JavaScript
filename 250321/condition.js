const cl = console.log;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
rl.question("점수를 입력하세요 >>> ", function (score) {
  if (score >= 60 && score <= 100) {
    cl("합격입니다.");
  } else if (score >= 0 && score < 60) {
    cl("불합격입니다.");
  } else {
    cl("잘못 입력하셨습니다.");
  }

  rl.close();
});
*/

/*
// 점수 입력하기 - 분기문
rl.question("점수를 입력하세요 >>> ", function (score) {
    if (score >= 60 && score <= 100) {
        cl("합격입니다.");
        if (score >= 90) {
            cl("장학 대상입니다.");
        }
    } else if (score >= 0 && score < 60) {
        cl("불합격입니다.");
    } else {
        cl("잘못 입력하셨습니다.");
    }

  if (score >= 90 && score <= 100) {
    cl("장학 대상입니다.");
  } else if (score >= 60 && score < 90) {
    cl("합격입니다.");
  } else if (score >= 0 && score < 60) {
    cl("불합격입니다.");
  } else {
    cl("잘못 입력하셨습니다.");
  }
  rl.close();
});
*/

/*
// 분기문
rl.question("드라이브를 포멧하시겠습니까? ", function (ch) {
  if (ch === "y") {
    cl("포멧을 시작합니다.");
  } else if (ch === "n") {
    cl("포멧을 취소합니다.");
  } else {
    cl("잘못 입력하셨습니다.");
  }

  rl.close();
});
*/

// 학점 분기문
rl.question("점수를 입력하세요 >>> ", function (score) {
  const number = Number(score);
  const num = parseInt(score);

  if (number >= 91 && number <= 100) {
    cl("A학점");
  } else if (number >= 81 && number <= 90) {
    cl("B학점");
  } else if (number >= 71 && number <= 80) {
    cl("C학점");
  } else if (number >= 61 && number <= 70) {
    cl("D학점");
  } else if (number >= 0 && number <= 60) {
    cl("F학점");
  } else {
    cl("잘못 입력하셨습니다.");
  }

  rl.close();
});
