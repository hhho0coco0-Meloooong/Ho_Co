// event01

// dom 요소 가져오기
const button = document.getElementById("btn");
const clickOutput = document.getElementById("clickOutput");

const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

const mouseArea = document.getElementById("mouseArea");
const mouseOutput = document.getElementById("mouseOutput");

const eventInfoBtn = document.getElementById("eventInfoBtn");
const eventInfoOutput = document.getElementById("eventInfoOutput");

// 1. 버튼 클릭 이벤트
button.addEventListener("click", ()=> {
    clickOutput.textContent = "Click@@@"; // text change
});

// 2. 텍스트 입력 이벤트
textInput.addEventListener("input", (event) => {
    textOutput.textContent = `입력된 텍스트 : ${event.target.value}`; // @@

});

// 키보드 이벤트
keyInput.addEventListener("keydown", (event)=> {
    keyOutput.textContent = `입력된 키 : ${event.key}`;
});

// 마우스 이벤트
mouseArea.addEventListener("mousemove", (event)=> {
    mouseOutput.textContent = `마우스 위치 : (${event.clientX}, ${event.clientY})`
});

mouseArea.addEventListener("mouseenter", ()=> {
    mouseOutput.textContent = `마우스가 영역에 들어왔습니다.`;
});

mouseArea.addEventListener("mouseleave", ()=> {
    mouseOutput.textContent = `마우스가 영역에 벗어났습니다.`;
});

// 이벤트 객체 정보 출력
eventInfoBtn.addEventListener("click", (event)=> {
    eventInfoOutput.textContent = `이벤트타입 : ${event.type}, 이벤트타겟 : ${event.target.tagName}, 버블링여부 : ${event.bubbles}`;
});