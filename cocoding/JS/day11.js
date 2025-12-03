// 객체2
// 프라퍼티(데이터)
// - 대쉬기호 [] 사용

const hong = {};
hong.name = "홍길동";
hong["frist-name"] = "길동";
hong["last-name"] = "홍";

console.log(hong.name);
console.log(hong["frist-name"]);
console.log(hong["last-name"]);

let x = 1, y = 2;

const obj1 = {
    x,
    y
};

console.log(obj1);

const prefix = "prop";
let i = 0;
const obj2 = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i
}

console.log(obj2);

const kang = {
    name : "강감찬",
    age : 30
};

kang.getName = function() {
    return this.name;
}

kang.getAge = function() {
    return this.age;
}

console.log(kang.getName() + kang.getAge());

const choi = {
    name : "최영",
    age : 20,
    getName() {
        console.log(this.name);
    },
    getAge() {
        console.log(this.age);
    }
}

choi.getName();
choi.getAge();