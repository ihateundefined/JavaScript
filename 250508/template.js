const name = "kim";
const age = 25;
const height = 123;

console.log(
  "My name is " +
    name +
    ", " +
    "My age is " +
    age +
    ", " +
    "My height is " +
    height
);

// 템플릿 문자열
console.log(`My name is ${name}, My age is ${age}, My height is ${height}`);

// 개행
console.log(
  "My name is " +
    name +
    "\n" +
    "My age is " +
    age +
    "\n" +
    "My height is " +
    height
);
console.log(`My name is ${name}
My age is ${age}
My height is ${height}`);
