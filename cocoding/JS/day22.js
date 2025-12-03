// 클로져
// 중첩함수에서의 스코프 체인
// const x = 1;
// function outerFunc() {
//     const x = 10;
//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }
// outerFunc();

// 클로져
// outer 함수가 실행을 종료하면, outer의 x가 소멸되어야 함
// outer 함수의 실행으로 inner함수가 반환되었음
// inner 함수 내에서 outer의 x변수를 참조하고 있음
// 그래서 outer가 종료되었지만, outer x 변수는 inner 에 의해서 참조되고 있음
// 이 때의 inner 함수를 클로져(종료된 외부함수의 변수에 접근할 수 있는 내부함수)
const x = 1;
function outer() {
    const x = 10;
    const inner = function() {
        console.log(x);
    }
    return inner;
}
const innerFunc = outer();
innerFunc();

// 클로져의 활용
const counter = (function() {
    // counter 함수는 외부 접근불가(정보은닉)
    let counter = 0;
    return function(func) { // function(func == counter)
        counter = func(counter);
        return counter;
    }
}()); // () 즉시실행@

function up(n) { return ++n};
function dw(n) { return --n};

console.log(counter(up));
console.log(counter(up));
console.log(counter(up));
console.log(counter(dw));