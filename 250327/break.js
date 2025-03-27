cl = console.log;

var value = 0;

while (true) {
  if (value > 100) {
    break;
  }

  cl("value : " + value);
  value++;
}
cl("value는 100보다 큽니다");
