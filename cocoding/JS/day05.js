// 데이터 타입

/*
number
string(문자열은 변경불가능한 값)
boolean
undefined : var 키워드로 선언된 변수에 자동으로 할당되는 값
null
Symbol : 값의 변경이 불가능한 기본타입
object(객체)
*/

let num1 = 5;
let num2 = 3.14;
let num3 = 0b0010; // 2진수
let num4 = 0o010; // 8진수
let num5 = 0x01; // 16진수
let num6 = Infinity;
let num7 = -Infinity;
let num8 = NaN;

let str1 = "hello";
let str2 = "hello";
let str3 = `${str1} ${str2}`; // ~ 백틱사용@@
console.log(str3);

let bool1 = true;
let bool2 = false;

let ud = undefined;
let nu = null;
let sb = Symbol(); //

let obj = {

};

let arr = [];

let re = /abc/;
console.log(re);

let func = function() {};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("안세웅", 29);

// 이스케이프 시퀸스
console.log("\0");
console.log("\b");
console.log("\f");
console.log("\n");
console.log("\r");
console.log("\t");
console.log("\v");
console.log("\u0010");
console.log("\'");
console.log("\"");
console.log("\\");

