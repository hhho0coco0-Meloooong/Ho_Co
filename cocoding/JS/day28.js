// 이터러블

const arr = [1,2,3];

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블
console.log(Symbol.iterator in arr);

// Symbol.iterator 메서드는 이터레이터를 반환
const iterator = arr[Symbol.iterator]();

// 이터레이터는 다음번 요소를 가리키는 next 메서드를 가짐
console.log("next" in iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for ~ of
for (ele of arr) {
    console.log(ele); // 1 2 3
}

console.log([...arr]);
console.log([...arr,4,5]);
console.log([..."Hello"]);
console.log([...[1,2], ...[3,4,5]]); // 1, 2, 3, 4, 5
console.log({...{x:1,y:2}});
console.log({...{x:1,y:2}, ...{y:3,z:4}}); // 중복시 뒤 적용

// 배열 구조분해 할당
const [f, s] = [1, 2]; // f = 1, s = 2
console.log(f, s);

// Rest 요소를 사용한 구조분해할당
const [x, ...y] = [1,2,3];
console.log(x, y); // x = 1, y = [2, 3]

// 구조분해할당 시 기본값 설정
const [aa, bb=4, cc] = [1,,3];
console.log(aa, bb, cc);

// 문자열 구조분해할당
const [a,b,c,d,e] = "Hello";
console.log(a,b,c,d,e);

const str = "Hello";
const {length} = str;
console.log(length);

// 객체 구조분해할당
const person = {
    name: "홍길동",
    age: 30
};
const {name, age} = person;
console.log(name, age);

const persons = [
    {pname: "홍길동", page:20},
    {pname: "길동", page:30},
    {pname: "동", page:40}
];

const [f1,f2,f3] = persons;
console.log(f1);
console.log(f2);
console.log(f3);

const[, {pname}] = persons; // 2번째
console.log(pname);

const [,,{page}] = persons;
console.log(page);

const user = {
    uname: "홍홍홍",
    addr: {
        city: "서울",
        dong: "역삼"
    }
};

const{uname, addr:{city, dong}} = user;
console.log(uname);
console.log(`${uname}은 ${city}시 ${dong}동에 삽니다@`);











