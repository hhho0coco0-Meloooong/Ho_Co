// 연산자(07)

// == or ===(type +)
// != or !==(type +)
// 지수연산자 2**3 = 2 * 2 * 2 = 8

let x = 3;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(1 + "00"); // 숫자 + 문자 = 문자열
console.log("hello" + 100); // 숫자 + 문자 = 문자열

x += 2;
y -= 2;
console.log(x, y);

console.log(1 == 2);
console.log(1 == "1"); // true
console.log(1 === "1"); // false(타입 불일치)
console.log(2 > 1);
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(0 == -0); // false
console.log(Object.is(0, -0)); // false

const age = 20;
console.log(age > 19 ? "관람가능" : "관람불가");

console.log(true||false); // or 연산자
console.log(true&&false); // and 연산자
console.log(!true); 

let a = 1, b = a + 1, c = b + 1;
console.log(c);

console.log((1 + 2) * (3 + 4));

console.log(typeof v10); // undefined

console.log(2**3);

// Object(객체)
let home = {
    name : "안세웅",
    age : 29
};

console.log(home?.name);
console.log(home?.hobby); // undefined

// null 이면 오른쪽 기본값 부여@
console.log(home?.name??"홍길동"); // 안세웅 출력
console.log(home?.address??"서울시"); // 서울시 출력









