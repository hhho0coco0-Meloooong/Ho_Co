// dom2

// 요소 선택
const mainTitle = document.getElementById("main-title");
const description = document.getElementById("description");
const list = document.getElementById("list");

console.log("노드 타입 : ", mainTitle.nodeType);
console.log("노드 이름 : ", mainTitle.nodeName);
console.log("노드 값 : ", mainTitle.nodeValue);

// 컨텐츠 조작
console.log("textContent : ", mainTitle.textContent);
mainTitle.textContent = "수정된 텍스트 컨텐츠";
console.log("textContent : ", mainTitle.textContent);

console.log("innerHTML : ", list.innerHTML);
list.innerHTML += "<li data-id='4' data-name='Item4'>Item 4</li>";
console.log("innerHTML : ", list.innerHTML);

// 요소의 속성들
console.log("attribute : ", mainTitle.attributes);
console.log("className : ", mainTitle.className);
mainTitle.classList.add("highlight");

// 데이터 속성
const firstItem = list.querySelector("li[data-id='1']");
console.log("data-id : ", firstItem.dataset.id);
console.log("data-id : ", firstItem.dataset.name);

// 요소 생성 및 추가
const newItem = document.createElement("li");
newItem.textContent = "Item 5";
newItem.dataset.id = "5";
newItem.dataset.name = "Item5";
list.appendChild(newItem);

// DocumentFragment
const fragment = document.createDocumentFragment();

for (let i=6; i<=8; i++) {
    const li = document.createElement("li"); // <li>
    li.textContent = `Item ${i}`; // <li>Item i</li>
    li.dataset.id = `${i}`;
    li.dataset.name = `Item${i}`;
    fragment.appendChild(li);
};
list.appendChild(fragment);

// 요소 삭제 및 대체
const secondItem = list.querySelector("li[data-id='2']"); // 삭제
list.removeChild(secondItem);

const thirdItem = list.querySelector("li[data-id='3']"); // 대체
const replacement = document.createElement("li");
replacement.textContent = "수정된 아이템";
replacement.dataset.id = "3";
replacement.dataset.name = "Sujung";
list.replaceChild(replacement, thirdItem);


// 속성 조작
console.log("id 속성 존재 여부 : ", mainTitle.hasAttribute("id"));
mainTitle.setAttribute("data-example", "demo");
console.log("새로운 속성 : ", mainTitle.getAttribute("data-example"));
mainTitle.removeAttribute("data-example");
console.log("삭제된 속셩 존재 여부 : ", mainTitle.hasAttribute("data-example"));

// 스타일링
mainTitle.style.color = "blue";
mainTitle.style.fontSize = "24px";
console.log("style : ", getComputedStyle(mainTitle).color);







