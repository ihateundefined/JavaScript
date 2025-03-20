const cl = console.log;
// 조건부 연산자
//  조건? value1 : value2
//  조건이 참이면 value1, 거짓이면 value2
var age = 20;
var result = age > 19 ? "성인" : "미성년자";
// cl(result);

// 논리 연산자
//  &&(and), ||(or), !(not)
// cl(true && true);
// cl(true && false);
// cl(false && true);
// cl(false && false);

var id = "admin";
var pw = "1234";
var result =
  id == "admin" && pw == "1234"
    ? "로그인 성공"
    : "아이디 또는 비밀번호가 틀렸습니다.";
// cl(result);

// cl(true && "hello");
// cl(false && "hello");
// cl(true || "hello"); // true
// cl(false || "hello"); // hello
// cl('hello' || true); // hello
// cl('hello' || false); // hello
// cl(null || "hello"); // hello
// cl(undefined || "hello"); // hello

// port 설정을 default로는 8080인데, 사용자가 입력한 값이 있으면 그 값을 사용하고 없으면 default값을 사용하고 싶다.
// cl("3000" || "8080");
// cl(!"hello");
// cl(!"");
// cl(!0);
// cl(!null);

var age = 89;
var result = age > 65 || age < 7 ? "지원대상입니다!" : "지원대상이 아닙니다!";
// cl(result);

// nullish 병합 연산자

var id = "laurence";
var result =
  id !== null && id !== undefined
    ? "아이디가 입력되었습니다!"
    : "아이디가 입력되지 않았습니다";
id ?? null ? "아이디가 입력되었습니다" : "아이디가 입력되지 않았습니다";

cl(result);
