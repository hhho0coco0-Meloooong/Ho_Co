// 함수2

// 즉시 실행함수 : 생성 후 바로 실행 -> 소멸
(function() {
    console.log("hello");
}());

(function(a, b) {
    console.log(a+b);
}(3, 5));
// outer - inner function
function outer() {
    let o = 1;
    function inner() {
        console.log(o);
        let i = 2;
        console.log(o + i);
    }
    inner();
}
outer();

// 재귀함수 : 함수 자신을 다시 호출하는 함수
function repeat(n, f) { // f(함수)
    for(let i=0; i<n; i++) {
        f(i);
    }
}
const logAll = function(i) {
    console.log(i); // 전달받은 후, 출력
}
repeat(5, logAll);

const logOdd = function(i) {
    if (i % 2) console.log(i); // 홀수 출력
}
repeat(5, logOdd);
// 중첩함수
// 콜백함수 : 함수에 인자로 전달되는 함수

// 순수함수 : 동일한 인수가 전달되면 항상 동일한 값을 반환하는 함수
let count1 = 0;
function increase1(n) {
    return ++n;
}
console.log(increase1(count1)); 
// 모두 1출력(외부의 값에 영향을 주지 않는다.)
// 순수함수는 기본값을 주고, 참조 값을 주지 않는다.(외부변형 x)
console.log(increase1(count1));
console.log(increase1(count1));

// not 순수함수
let count2 = 0;
function increase2() {
    return ++count2;
}
console.log(increase2(count2));
console.log(increase2(count2));
console.log(increase2(count2));
