// string

const str = "Hello, Javascript";
console.log(str.indexOf("Java")); // J index ?
console.log(str.includes("Java")); // true
console.log(str.search("Java")); // J index
console.log(str.startsWith("Hello"));
console.log(str.endsWith("t"));
console.log(str.charAt(4)); // o
console.log(str.substring(0,5)); // Hello(0 ~ 4)
console.log(str.slice(-10, -1)); // - 뒤부터 시작
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("   Hello Java".trim()); // 앞 뒤 공백제거
console.log("Hello".repeat(3));
console.log(str.replace("Javascript", "World"));
console.log(str.split(", ")); // , 로 구분지어 배열생성


// number
console.log(Number.isFinite(123));
console.log(Number.isInteger(123.45)); // 정수?
console.log(Number.isNaN(NaN));
console.log((123.345).toFixed(2)); // 소수점 고정
console.log((123).toString()); // 문자 변환

// math
console.log(Math.abs(-10)); // 절대값
console.log(Math.round(4.5)); // 반올림
console.log(Math.ceil(4.1)); // 올림
console.log(Math.floor(4.9));
console.log(Math.pow(2,3)); // 2**3
console.log(Math.max(1,2));
console.log(Math.min(1,2));

// data
console.log(Date.now());
console.log(Date.parse("2024-01-01")); // 2024년 1월 1일 0:0:0 몇 초인가?

const dt = new Date();
console.log(dt.getFullYear());
console.log(dt.getMonth()); // 0 ~ 11
console.log(dt.getDate());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds);
console.log(dt.getTime());
console.log(dt.getDay()); // 요일 0 ~ 6
console.log(dt.getTimezoneOffset()); // UTC(GMT)부터 분의 간격
console.log(dt.toLocaleString());




