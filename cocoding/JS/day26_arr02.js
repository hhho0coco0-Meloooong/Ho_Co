// arr02

// arr.Method();
// isArray, indexof, includes, push, pop, unshift, shift
// concat, splice, slice, join, reverse, fill, flat

// high Order Function
// sort, forEach, map, filter, reduce, some, every, 
// find, findIndex, flatMap

const arr01 = [1, 10, 9, 4, 5];

console.log(Array.isArray(arr01)); // 배열이면 true
console.log(arr01.indexOf(10));
console.log(arr01.includes(9));
console.log(arr01.includes(3));

// 배열의 끝에 7이라는 요소를 추가하고 배열의 개수 반환
console.log(arr01.push(7));
// 배열의 끝 요소를 제거하고, 제거된 요소를 반환 
console.log(arr01.pop());
// 배열 앞 추가하고, 개수 반환
console.log(arr01.unshift(2));
// 앞 요소 제거하고, 제거된 요소 반환
console.log(arr01.shift());

console.log(arr01.concat(3, 8)); // 배열 끝 3, 8 추가하고 추가된 배열 반환
console.log(arr01.splice(1, 2)); // 1번 인덱스에서 2개 제거
console.log(arr01.join()); // 배열의 요소들을 문자열로 변환
console.log(arr01.reverse());
console.log(arr01.fill(10)); // 모든 요소 10으로 변환
// console.log();

// 2차원 배열
const arr02 = [[1,2], [3,4]];
console.log(arr02.flat()); // 내부배열의 요소들을 평탄화
// 2차원을 1차원으로 평탄화

// 고차함수
const arr03 = [1, 2, 3, 4, 5];

const forEachArr = arr03.forEach(function(event) {
    // 각각의 인덱스 배열요소에 반복하며 접근
    // event 파라미터
    console.log(event);
    
});

console.log(forEachArr); // undefined

const mapArr = arr03.map((event)=> {
    console.log(event);
    return event ** event;
    
});
console.log(mapArr);

const filterArr = arr03.filter((event)=> {
    return event % 2;
})
console.log(filterArr);

const sum = arr03.reduce((arr, cur)=> {
    return arr + cur; // 1 + 2 + 3 + 4 + 5 (누적 합)
}, 0);
console.log(sum);

const some = arr03.some((event)=> {
    return event == 5;
});
// some : 배열요소 내 조건이 하나라도 만족하면 true
console.log(some);

const every = arr03.every((ele)=> {
    return ele > 3;
});
// every : 전체 조건이 만족하면 true
console.log(every);

const find = arr03.find((ele)=>{
    return ele == 3;
});
console.log(find);

const findIndex = arr03.findIndex((ele)=>{
    return ele == 3;
});
console.log(findIndex);
