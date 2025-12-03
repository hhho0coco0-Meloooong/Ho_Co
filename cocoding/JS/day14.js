// 스코프 : 식별자를 참조할 수 있는 범위(ex -> 함수)
// global, function, block, module, + local
// 모듈 = 파일

var v1 = 1; // 전역
function func() {
    var v1 = 2; // 지역
    console.log(v1);
}

func(); // 2

console.log(v1); // 1

var v2 = 1;
function func2() {
    // var v2; 생략
    console.log(v2); // undefined
    var v2 = 2;
}
func2();

// block
var v3 = 1; // 전역
{
    var v3 = 2; // 전역 -> 재정의
}

console.log(v3); // 2

let l1 = 1; // 전역
{
    let l1 = 2; // bolck
}
console.log(l1); // 1

var v4 = 1;
var v4 = 2;
let l2 = 1;
// let l2 = 2; error
console.log(v4); // 2

var v5 = 1;
console.log(globalThis.v5);

