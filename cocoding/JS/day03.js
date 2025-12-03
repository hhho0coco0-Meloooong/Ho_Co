var v; // undefined
console.log(v);

v = 3;
console.log(v);

let l;
console.log(l);

l = 5;
console.log(l);

const c = 3.14;
console.log(c);

// c = 5;

k = 5; // 기본으로 var 적용@
console.log(k);

var v2 = 10;
console.log(v2);


// 호이스팅 : 실행할 코드의 선언문들을 최상단으로 끌어올리는 것
// var v22; 적용됨(let, const 불가능..)
console.log(v22); // defined
var v22 = 5;
console.log(v22); // 5

// 코드 선언 > 실행 순으로 수행
// 코드 안에 선언하지 않으면, 
// 코드 상단에 선언된 것으로 간주함(호이스팅)
// var 호이스팅 가능
// let, const 호이스팅 불가능

f("hello");
function f(str) {
    console.log(str);
}

