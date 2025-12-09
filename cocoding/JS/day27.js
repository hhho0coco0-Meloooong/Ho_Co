// 정규표현식 객체 생성
const regExp = /abc/i; // i : 대소문자 구분 x @@@
// const regExp01 = new RegExp(/abc/i);
// const regExp02 = new RegExp(/abc/, "i");
// const regExp03 = new RegExp("abc", "i");

// 정규표현식 메서드
const str01 = "ab abc ab";
const regExp_01 = /ab/g;
console.log(regExp_01.test(str01)); // true, 패턴과 일치하면 true
console.log(regExp_01.exec(str01)); // 패턴 검색 결과 반환
console.log(str01.match(regExp_01)); // match : 패턴과 일치하면 배열로 생성
console.log(str01.replace(/abc/, "")); // 일치하는 문자열을 변환 abc -> ""(공백)

// 패턴 문자
const str02 = "a ab aa abc aaa ac abcd";
console.log(str02.match(/a./g)); // . a가 나오고 문자 하나가 나오는 패턴
console.log(str02.match(/a{2}/g)); // {} 반복패턴
console.log(str02.match(/a{2,3}/g)); // {} a가 2 or 3번 반복
console.log(str02.match(/a+/g)); // + a가 1번 이상 나오는 패턴
console.log(str02.match(/a?/g)); // ? a가 안 나오거나 1번 나오는 패턴
console.log(str02.match(/abc|ab/g)); // abc 또는 ab
console.log(str02.match(/ab|abc/g)); // ab 또는 abc(순서)
console.log(str02.match(/[a-b]/g)); // [a-b] 범위 
console.log(str02.match(/[0-9]/g)); // 숫자 하나, = \d
console.log(str02.match(/[a-zA-Z]/g)); // 영문자 하나
console.log(str02.match(/[a-zA-Z_]/g)); // word 하나 = \w
console.log(str02.match(/\s/g)); // \s 공백문자 하나(\n, \r, \t, \v, \f)
console.log(str02.match(/[^abc]/)); // [^] a b c 가 아닌(not)
console.log(str02.match(/^abc/)); // ^ abc로 시작
console.log(str02.match(/abc$/)); // ^ abc로 끝
console.log(str02.match(/[cd]$/)); // c 나 d 로 끝 


// 플래그 : 패턴에 대한 검색옵션
const str03 = "a ab abc \r?\nabc ab a";
console.log(str03.match(/AB/i)); // i 대소문자 구분 x(g 없으면 앞 문자열 1개)
// g : global
console.log(str03.match(/AB/ig)); // 대소문자 구분 없이 전역 검색(전체 문자열)
console.log(str03.match(/^AB/igm)); // m 전체 라인에서 대소문자 구분없이 전역검색

// 패턴 : 매칭할 문자열에 대한 규칙









