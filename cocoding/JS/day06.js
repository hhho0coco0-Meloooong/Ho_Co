// 동적타이핑(06)

// typeof(타입 확인), instanceof

let l;
console.log(typeof l);

l = 1;
console.log(typeof l);

l = "hello";
console.log(typeof l);

l = {};
console.log(typeof l);

l = null;
console.log(typeof l); // object

l = function() {};
console.log(typeof l);

const obj = {};
console.log(typeof obj);
console.log(obj instanceof Object); // 타입 확인(true or false)
console.log(obj instanceof Function);

const obj2 = null;
console.log(obj2 instanceof Object); // false

