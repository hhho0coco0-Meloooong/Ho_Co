// 스코프2

// 렉시컬 스코프 : 실행 컨텍스 상에서 식별자가 갖게 되는 스코프
// 스코프 탐색 : 지역 -> 전역

var v = 1; // 전역

function func() {
    var v = 2; // 지역
    console.log(v); // 2
}
console.log(v); // 1
func(); // 2

var l = 1; // 전역

function outer() {
    console.log(l); // 1
    l = 3;
    console.log(l); // 3
    function inner() {
        // var l; undefined
        console.log(l); // undefined
        var l = 5;
        console.log(l); // 5
    }
    inner();
}
outer();
console.log(l); // 3