// event 02

// Capturing : 상위 -> 하위 전파
// Bubbling : 하위 -> 상위 전파
// Target : 이벤트가 발생한 요소에 도달

// 이벤트 전파
const ul = document.getElementById("fruits");
ul.addEventListener("click", (e)=> {
    console.log(`단계 : ${e.eventPhase}`);
    console.log(`타겟 : ${e.target.tagName}`);
    console.log(`현재 타겟 : ${e.currentTarget.tagName}`);
    
});

// 이벤트 위임
ul.addEventListener("click", (e)=> {
    if(e.target.matches("li")) {
        [...ul.children].forEach(li => li.classList.remove("active"));
        e.target.classList.add("active");
    }
});

// 이벤트 핸들러내에서의 this
const button = document.querySelector(".btn");
button.addEventListener("click", function() {
    console.log(this);
    
});

// 커스텀 이벤트
const customEvent = new CustomEvent("customClick", {
    detail: {message: "커스텀 이벤트"}
    // detail : 메세지를 담는 곳
});
button.addEventListener("customClick", (e) => {
    alert(e.detail.message);
});
button.dispatchEvent(customEvent);
// dispatchEvent : 이벤트를 DOM 트리에 전달 -> 실행됨@
