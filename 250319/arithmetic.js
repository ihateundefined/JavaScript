const cl = console.log;

var a = 3;
var b = 2;

// Arithmetic operators
// 연산자
// cl(a + b);
// cl(a - b);
// cl(a * b);
// cl(a / b);
// cl(a % b);
// cl(a ** b);

// 피연산자, 단항연산자, 이항연산자
// x + 3
// +3
// 숫자 + 숫자, 3 + 2
// 문자열 + 문자열 = 문자열의 결합, '기' + '쁨' = '기쁨'
// 연산자 오버로딩이 되어있음
// cl("상남자" + 777);
// cl(+"1011" + 1);
// cl(1 + "1");
// cl(+true);
// cl(+false);
// cl("10" - 5);
// cl("10" * 5);
// cl("10" / 5);
// cl("10" % 5);

// 할당 연산자 == 대입 연산자 a = b
var a = 3;
var b = a + 2;
var c = b - a;

cl(a, b, c);
