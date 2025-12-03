// 제어문

const age = 20;

if(age > 19) {
    console.log("20 이상")
}else {
    console.log("20 미만")
}

const score = 88;

if(score >= 90) {
    console.log("A");
}else if(score >= 80) {
    console.log("B");
}else {
    console.log("F");
}

let yoil = 3;

switch (yoil) {
    case 0: console.log("일요일"); break;
    case 1: console.log("월요일"); break;
    case 2: console.log("화요일"); break;
    case 3: console.log("수요일"); break;
}

for (let i=0; i<10; i++) {
    console.log(i + 1);
}

for (let i=2; i<10; i++) {
    for (let j=1; j<10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let max = 100;

while (max-- > 0) {
    console.log(max);
}

let min = 0;

do {
    console.log(++min);
} while (min < 10);

for (let i=0; i<10; i++) {
    if(i%2==0) continue; // 다음반복 실행
    if(i==7) break; // 반복문 중지
    console.log(i);
}