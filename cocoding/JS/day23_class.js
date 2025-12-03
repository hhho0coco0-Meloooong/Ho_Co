// 클래스1

class Person {
    // 생성자
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    }
    // 인스턴스 메서드 == 프로토타입 메서드
    printName() {
        console.log(this.name);
    }
    // static 메서드
    static printName(name) {
        console.log(name);
    }
    // getter
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name; // _ 개발자간의 약속
    }
}

const p1 = new Person("홍길동", 20);
const p2 = new Person("강감찬", 30);

p1.printName();
console.log(p1.name); // getter

p2.name = "장보고"; // setter 호출
p2.printName();
console.log(p2.name); // getter

// static
Person.printName("이순신");
Person.printName("유관순");

