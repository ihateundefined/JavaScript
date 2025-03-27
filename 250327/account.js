function account() {
    var savedUser = '김현정';
    console.log('반갑습니다 ' + savedUser + '님');
}

function naver() {
    console.log("naver 함수 진입");
    var savedUser = "김현정";
    google();
  console.log("naver 함수 탈출");
}

function google() {
    console.log("google 함수 진입");

    var savedUser = "김한석";
    console.log("google 함수 탈출");
}

naver();
