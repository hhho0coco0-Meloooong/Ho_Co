// 프로토타입1

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // false

// 생성자 함수
function Circle2(radius) {
    this.radius = radius;
}
Circle2.prototype.getArea = function() { // 메서드 추가 방법
    // 메서드 한 곳을 바라본다
    return Math.PI * this.radius ** 2;
}

const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

console.log(circle3.getArea === circle4.getArea); // true

// prototype, constructor, __proto__의 관계
// 생성자함수는 prototype 프라퍼티를 가짐
// 생성자함수는 prototype 프라퍼티는 constructor를 가짐
// 모든 객체는 __proto__를 통해 생성자함수의 prototype에 접근

function Person(name) {
    this.name = name;
}
const hong = new Person("홍길동");

console.log(Person.prototype); // {} 객체
console.log(Person.prototype.constructor); // Person
console.log(hong.__proto__ == Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

