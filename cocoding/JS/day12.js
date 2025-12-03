// 함수1

// 화살표 함수(문별 간결화)
// const add = (x, y) => x + y;
// add(1, 2);

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

const mul = function(a, b) {
    return a * b;
}
console.log(mul(2, 2));

const dev = new Function("a", "b", "return a / b");
console.log(dev(2, 2));

const minus = (a,b) => {
    return a - b;
}
console.log(minus(5, 4));

const func = function(a, b, c) {
    console.log(`a : ${a}`)
    console.log(`b : ${b}`)
    console.log(`c : ${c}`)
};

console.log(func);
console.log(func(1)); // 값 미지정 시, undefined
console.log(func(1, 2)); // 값 미지정 시, undefined
console.log(func(1, 2, 3)); // 값 미지정 시, undefined
console.log(func(1, 2, 3, 4));

const func2 = function() {
    console.log("hello");
};

func2();

