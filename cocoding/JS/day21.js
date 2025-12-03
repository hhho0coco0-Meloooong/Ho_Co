// 실행컨텍스트

const x = 1;

function foo() {
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    bar();
}
foo();

// 평가와 실행 과정
/*

1. 전역평가 : x, foo 전역스코프에 생성, 전역 실행컨텍스트 생성
2. 전역실행 : foo 호출
3. foo함수 지역평가 : y, bar foo의 지역스코프에 생성, foo 지역 실행컨텍스트 생성
4. foo함수 실행 : bar 호출
5. bar함수 지역평가 : z bar의 지역스코프에 생성, bar 지역 실행컨텍스트 생성
6. bar함수 실행 : console.log 실행
7. bar함수 종료 : bar 지역 실행컨텍스트 소멸
8. foo함수 종료 : foo 지역 실행컨텍스트 소멸
9. 전역 종료 : 전역 실행컨텍스트 소멸

*/