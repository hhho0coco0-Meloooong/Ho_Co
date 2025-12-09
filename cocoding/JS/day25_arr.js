// 배열1

// const arr = [1,2,3];
// const arr02 = new Array(10);
// const arr03 = new Array(1, 2, 3);
// const arr04 = Array.of(1,2,3);

// delete arr[1] = 삭제 [1, x, 3]
// splice arr(1, 1) = 삭제 [1, 2]

// 배열의 크기와 요소 접근
const arr01 = [1, 2, 3, 4, 5];
console.log(arr01.length);
console.log(arr01[0]);

// 동적 배열 요소 추가
arr01[5] = 6;
console.log(arr01.length);
console.log(arr01[5]);

console.log("====================");

// 희소 배열
const arr02 = [1, , 3, ,5];
console.log(arr02.length);
console.log(arr02[1]); // undefined

// 배열 생성

const arr03 = [1, 2, 3];
console.log(arr03);

const arr04 = new Array(10);
console.log(arr04);

const arr05 = new Array(1, 2, 3);
console.log(arr05);

const arr06 = Array.of(1); // [1]
console.log(arr06);

const arr07 = Array.of(1, 2, 3);
console.log(arr07);

const arr08 = Array.from({
    length:2, 
    0:"a", 
    1:"b"}); // 유사배열객체로 배열 생성(Array.from)

console.log(arr08);

const arr09 = Array.from("hello"); // 이터러블로 배열 생성
console.log(arr09); // [h, e, l, l, o]

// 배열 요소 추가/변경/삭제
const arr10 = [];

arr10[0] = "a";
arr10[1] = "b";
arr10[2] = "c";
console.log(arr10);

// 변경
arr10[1] = "k";
console.log(arr10);

// 삭제
delete arr10[1]; // 값 삭제 후, undefined
console.log(arr10.length);
console.log(arr10);

arr10.splice(1, 1); // 1번 인덱스에서 1개의 요소를 삭제(여러 개도 가능)
console.log(arr10.length);
console.log(arr10);

arr10.splice(0, 2); // 1번 인덱스에서 1개의 요소를 삭제
console.log(arr10);









