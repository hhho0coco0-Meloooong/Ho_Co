// error 처리

// try {
//     v = 10;
//     let v;
// } catch (err) {
//     console.log(err.message);
//     console.log("에러 처리@");
// } finally {
//     console.log("에러발생 여부와 관계없이 처리@");
    
// }

// v = 10;
// let v;

// 에러의 종류
// 3***3
// SyntaxError : 문법 오류

// func()
// ReferenceError : 참조 오류

// null.func() TypeError

// new Array(-1) RangeError

// decodeURIComponent("%") URIError

// 사용자 정의 에러
const myError = new Error("내가 만든 에러");
try{

    // 에러 발생시킴
    throw myError;
} catch (err) {
    console.log(err.message);
}

// 에러 전파
const first = function() {
    second();
};

const second = ()=> {
    third();
};

const third = ()=> {
    v = 10;
    let v;
};

try {

    first();
} catch (err) {
    console.log(err.message);
}