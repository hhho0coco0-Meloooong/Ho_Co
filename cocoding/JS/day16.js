// 일급객체

const func = function() {
    console.log("hello");
}

const main = function(f1, f2) {
    f1();
    f2();
}

main(func, func);

const add = function(a, b) {
    console.log(arguments); // 전달인자 정보
    console.log(add.caller);
    console.log(arguments.callee); // add 함수 호출
    console.log(arguments.length); // 인자 길이 : 2
    return a + b;
}

add(1, 2);

// 함수속성 정보 출력
// console.log(Object.getOwnPropertyDescriptors(add));

console.log(add.length); // length : 파라미터 개수
console.log(add.name);
console.log(add.prototype); // {} : 비어있는 객체

const hong = {
    name: "홍길동",
    age : 20
};

// 객체 프로토타입 true
console.log(hong.__proto__ === Object.prototype);
console.log(hong.hasOwnProperty('__proto__'));
