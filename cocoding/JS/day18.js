// 프로토타입2
// 체인(=상속)

// 함수 -> Perosn
// 객체 -> Person.prototype

// 프로토타입 확장
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    };
}

Person.prototype.getAge = function() {
    return this.age;
};

const p1 = new Person("홍길동", 20);
console.log(p1.getName());
console.log(p1.getAge());

// 프로토타입 체인
function Car(cp, md) {
    this.cp = cp;
    this.md = md;
}

const car = new Car("테슬라", "Y");
console.log(car.__proto__ === Car.prototype);
console.log(Car.prototype.__proto__ === Object.prototype);

// 프로토타입 교체
function Ck(name) {
    this.name = name;
}
Ck.prototype.sd = function() {
    console.log(this.name + "꼬끼");
};
function Dk (name) {
    this.name = name;
};
Dk.prototype.sd = function() {
    console.log(this.name + "꽥꽥");
}
// 객체 생성 전, 코드작성 적용 O
Ck.prototype = Dk.prototype; // 객체 생성 전 후로 교체가 변화한다.

const ck1 = new Ck("오골계");
const dk1 = new Dk("청둥오리");

// Ck.prototype = Dk.prototype;
// 객체 생성 후, 코드작성 적용 X
ck1.sd();
dk1.sd();