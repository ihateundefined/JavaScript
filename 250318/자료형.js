const cl = console.log;

// 다양한 형태의 변수 및 + 연산
var lang =
  "JavaScript 객체지향 프로그래밍은 소프트웨어 개발 업무의 복잡성이 높아지고 있는 환경에서 보다 명료하고, 신뢰성 있으며, 유지보수를 쉽게 할 수 있는 프로그램을 개발할 수 있도록 하기 위한 문제 접근 방법이다. 본 과목에서는 C++ 언어를 중심으로하여 객체지향 프로그래밍의 개념들을 프로그램으로 구현하기 위한 능력을 배양하는데 목표를 두고 있다. 교재의 프로그램이나 연습 과제를 직접 프로그램으로 작성하여 봄으로써 여러 가지 구문과 용법을 익히기 바란다.";
var love = " 사랑하";
var you = null;
var num = 5;
// cl(lang + love + you + num);
// cl(lang.length);

// 문자열 출력
var msg1 = 'she said "Good Bye"';
var msg11 = "she said 'Good Bye'";
var msg2 = "she's gone";
// cl(msg1);
// cl(msg11);
// cl(msg2);

// boolean
var checkIn = true;
var checkOut = false;
// cl(checkIn);
// cl(checkOut);

var bigger = 100 > 99;
// cl(bigger);
var smaller = 100 < 99;
// cl(smaller);

// null과 undefined
// null은 값이 없다는 것을 의미 .. 빈 값!
// 주소값을 담은 포인터 .. 해당 변수가 가르키는 대상이 없다는 의미 -> null pointer
var love = null;
// cl(Boolean(love));
// null 값은 초기화 할 때 사용 .. 반드시 넣어줘야 null이 된다.
// 의도적으로 넣은 것 .. 그렇지 않으면 쓰레기 값이 들어가 있으므로
// 의도적으로 값을 넣지 않은 것 == 오류 아님

// undefined 정의 되지 않음
// 변수를 선언했지만 값이 할당되지 않은 상태 == 초기화가 되어있지 않은 상태 == 쓰레기 값이 들어있는 상태 (C, C++에서)
// undefined는 변수를 선언만 하고 값을 넣지 않은 경우, 할당되지 않은 상태
var name;
cl(name); // undefined .. 의도한게 아님, 초기화를 하지 않은 상태임 .. 의도치않게 값을 넣어주지 않았거나 return 되지 않았을 때 .. 일종의 오류
