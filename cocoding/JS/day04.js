10 + 20;

"hello" + "python";

let l1 = 3;
let l2 = 5;
console.log(l1 + l2);

let l3 = 3;
console.log(l3 + 3);

function add(x, y) {
    return x + y;
}

console.log(1 + add(2, 3));

// literal : 값 + 타입
console.log(10);

console.log(3.14);

console.log(0b10); // 2진수

console.log(0o111); // 8진수

console.log(0xff); // 16진수

console.log(false);

console.log(null);

console.log(undefined);

console.log({
    name : "안세웅",
    age : 20
});

console.log([1, 2, 3]);

console.log(function f() {});

console.log(/[a-z]/);

// 문장
let a = 3;
let b = 5;
let sum = a + b;

console.log(sum);

if(sum > 5) 
    console.log("5보다 큼!");


for(let i=0; i<5; i++) {
    console.log(i + 1);
}

function add2 (x, y) {
    return x * 2 + y;
}

console.log(add2(2,2));