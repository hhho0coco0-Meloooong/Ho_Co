// 프라미스

const promistGet = url => {
    return new Promise((resolve, reject)=> { // 성공, 실패
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200) {
                // 성공적으로 응답을 받으면 resolve 함수를 호출
                resolve(JSON.parse(xhr.response));
                // response : 성공적으로 응답했을 때 -> 응답 본문
                // JSON.parse() : 문자열 -> 객체 변환
                // JSON.stringify() : 객체 -> 문자열 변환
            } else {
                // 에러 처리를 위한 reject 함수를 호출
                reject(new Error(xhr.status));
            }
        };
    })
};

promistGet("https://jsonplaceholder.typicode.com/posts/1")
.then(res => console.log(res)) // 성공
.catch(err => console.log(err)) // 에러
.finally(()=> console.log("Bye")); // 성공/에러 상관없이


// 프라미스 체이닝
const url = "https://jsonplaceholder.typicode.com/posts/1";
promistGet(`${url}/posts/1`)
.then(({ userId })=> promistGet(`${url}/user/${userId}`))
.catch(userInfo => console.log(userInfo)) 
.finally((err)=> console.log(err)); 

// setTimeout 을 순차적으로 처리
const requestData1 = () => new Promise(resolve => setTimeout(()=> resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(()=> resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(()=> resolve(3), 1000));

const res = [];
requestData1()
.then(data => {
    res.push(data);
    return requestData2();
})
.then(data => {
    res.push(data);
    return requestData3();
})
.then(data => {
    res.push(data);
    console.log(res);  
})
.catch(console.error);

// 프라미스 정적 메서드

// 모두 성공
Promise.all([
    1,
    2,
    3
])
.then(console.log)
.catch(console.log);

// 어느 하나 성공
Promise.race([
    new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=> resolve(1), 3000))
])
.then(console.log)
.catch(console.log);

// 모두 성공이나 실패
Promise.allSettled([
    new Promise(resolve => setTimeout(()=> resolve(1), 2000)),
    new Promise((_, reject) => setTimeout(()=> reject(new Error("Error")), 1000)),

]).then(console.log);