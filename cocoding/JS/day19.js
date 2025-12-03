// 프로토타입3

function Bird() {
    this.name = "새";
}

function Ck() {
    this.name = "닭";
}

Ck.__proto__ = Bird.prototype; // 치킨이 버드를 상속 받음
const ck1 = new Ck();
const bd1 = new Bird();

// 프라퍼티쉐도잉
console.log(ck1.name);
console.log(bd1.name);

// 오버라이딩
// prototype의 메서드를 인스턴스(객체)의 메소드가 오버라이딩
Bird.prototype.getName = function() {
    return this.name;
};
Ck.prototype.getName = function() {
    return this.name;
}
const bd2 = new Bird();
const ck2 = new Ck();
console.log(ck2.name);
console.log(bd2.name);

bd2.getName = function() {
    return "객체 새";
}

ck2.getName = function() {
    return "객체 닭";
}
console.log(ck2.getName());
delete ck2.getName;
console.log(ck2.getName());

// 프라퍼티 열거
function Person(name, age) {
    this.name = name;
    this.age = age;
};
const p1 = new Person("홍길동", 20);

console.log(p1 instanceof Person);
console.log(p1 instanceof Object);

console.log("name" in p1);
console.log("address" in p1);

// 객체 열거가능한 프라퍼티들의 수만큼 반복
for (const key in p1) {
    console.log(p1[key]);
}

// 정적 프라퍼티 & 정적 메소드

function Car(cp, md) {
    this.cp = cp;
    this.md = md;
    this.run = function() {
        console.log("run");
    }
};

const c1 = new Car("테슬라", "Y");
console.log(c1.cp + " " + c1.md);
c1.run();

Car.price = 1000; // 정적 프라퍼티
Car.stop = function() { // 정적 메서드
    console.log("stop");
};

console.log(Car.price); // undefined
Car.stop();

console.log();
// ChannelMergerNode
// ChannelMergerNode
console.log();

console.log();
console.log();
console.log();

