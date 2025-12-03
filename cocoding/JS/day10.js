// 객체1
// 자바스크립트는 prototype 기반의 객체기반언어

const obj1 = {

};

const obj2 = {
    name : "홍길동",
    age : 20
};

console.log(obj2);

obj2.name = "강감찬";
console.log(obj2);

const o1 = {};

const o2 = new Object();

// 생성자
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const o3 = new Person("홍길동", 20);
console.log(o3);

const o4 = Object.create(Person.prototype);
o4.name = "강감찬";
o4.age = 29;
console.log(o4);

class Dog {
    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const dog = new Dog("사모예드", 3);
console.log(dog);

const hong = {
    name : "홍길동",
    age : 20,
    ["local-addr"] : "서울시"
}
console.log(hong);

hong.hobby = "축구"; // add
console.log(hong);

hong["first-name"] = "길동";
console.log(hong.height);

delete hong.age;
console.log(hong);

const kang = {
    name : "홍길동",
    age : 10,
    getName : function() {
        return this.name;
    },
    getAge : function() {
        return this.age;
    }
}
console.log(`${kang.getName()}은 ${kang.getAge()}살 입니다.`);

