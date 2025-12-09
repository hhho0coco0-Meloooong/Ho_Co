const person = {
    name: "홍길동",
    age: 30,
    hobby: ["축구", "농구"]
}

// person 객체를 JSON 문자열로 변환
const json = JSON.stringify(person);
console.log(typeof json, json);

// null : 필터링함수(replacer),
// 2: 들여쓰기 개수
const prettyJson = JSON.stringify(person, null, 2);
console.log(typeof prettyJson, prettyJson);

// 필터링함수 생성
function filter(key, value) {
    return typeof value === "number" ? undefined : value;
    // number = undefined, or value
};

// 필터링함수를 적용해서 문자열로 변환
const filterPerson = JSON.stringify(person, filter, 2);
console.log(typeof filterPerson, filterPerson);

// XHR 객체 생성
const xhr = new XMLHttpRequest();

// xhr 객체 초기화
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// 요청 전송
xhr.send();

// readystatechange : 이벤트, readyState 값이 변겅
xhr.onreadystatechange = ()=> {
    // 요청상태가 요청완료가 아니면 돌아감
    if(xhr.readyState !==4) return;
    // 응답상태코드 200=OK, 응답완료 체크
    if(xhr.status === 200) {
        // xhr.response : 응답된 JSON 문자열
        // JSON.parse : JSON 문자열을 JSON 객체로 변환
        console.log(JSON.parse(xhr.response));
    }else {
        // 정상적 응답이 아니면 ~
        console.log("error!", xhr.status, xhr.statusText);
    }
}
