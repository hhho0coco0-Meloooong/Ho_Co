// 클래스2 + 상속

class Animal {
    constructor() {
        this.name = "동물";
    }
};
class Cat extends Animal {
    constructor() {
        super(); // name call
        this.name = "고양이";
    }
};
class Dog extends Animal {
    constructor() {
        super();
        this.name = "강아지";
    }
}
const ani01 = new Animal();
console.log(ani01.name);

const cat01 = new Cat();
console.log(cat01.name);

const dog01 = new Dog();
console.log(dog01.name);

// 동적 상속
class WireMouse {
    constructor() {
        this.name = "유선마우스";
    }
}

class WirelessMouse {
    constructor() {
        this.name = "무선마우스";
    }
}
const Wireless = true;

// 삼항 연산자를 통한 동적 상속
class MyMouse extends (Wireless ? WirelessMouse : WireMouse) {

}

const mymouse = new MyMouse();
console.log(mymouse.name); // WirelessMouse

// 오버라이딩
class Mamma1 {
    constructor() {}
    breath() {
        console.log("포유류 숨 쉼@");
    }
}
class Whale extends Mamma1 {
    constructor() {
        super(); // 생략불가능
    }
    breath() {
        console.log("고래가 숨 쉼@");
        
    }
}

const whale01 = new Whale();
whale01.breath(); // 오버라이딩 자식 메서드 호출@
