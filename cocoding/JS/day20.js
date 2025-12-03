// this
console.log(this); // {} node : object, web broswer : window

// 생성자함수 내에서의 this는 생성자 함수를 통해서 생성될 객체자신
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 함수 호출방식에 따른 this 바인딩
const Car = function() {
    console.log(this);
}

// 1. 일반함수 호출방식 > this(전역객체)
Car(); // {}

// 2. 메서드 호출방식 > this(메소드를 호출한 객체)
const obj01 = {
    name : "객체",
    Car
};
obj01.Car(); // obj1 {}

// 3. 생성자함수 호출방식 > this(생성자함수를 통해 생성될 객체)
new Car(); // Car {}

// apply, call, bind
function func(age, kor, eng) {
    this.age = age;
    this.kor = kor;
    this.eng = eng;
    console.log(this.name);
    console.log(this.age);
    console.log(this.kor + this.eng);
}

const person = {name : "홍길동"};

func.apply(person, [20, 100, 90]); // 홍길동 20 190
func.call(person, 20, 100, 90);

func_cp = func.bind(person, 20, 100, 90); 
// func 호출시에 person이 this가 되는 함수

func_cp(); // 홍길동 undefined NaN

