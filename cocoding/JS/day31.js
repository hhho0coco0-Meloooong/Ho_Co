// DOM1 (Document Object Model)

window.onload = function() {
    document.getElementById("testButton").addEventListener("click"

    , ()=> {
        const parent = document.getElementById("parent");
        console.log("부모 노드 : " + parent);
        
        const cN = parent.childNodes;
        console.log(cN); // 텍스트@ 노드 포함

        const cD = parent.children;
        console.log(cD); // 요소노드들만 포함
        
        console.log(parent.firstChild);
        console.log(parent.lastChild);
        
        console.log(parent.firstElementChild);
        console.log(parent.lastElementChild);

        const fC = parent.firstElementChild;
        console.log(fC.nextElementSibling); // 다음 요소
        console.log(fC.nextSibling); // 다음 요소
        
        const lC = parent.lastElementChild;
        console.log(lC.previousSibling);
        console.log(lC.previousElementSibling);
        
        const bTN = document.getElementsByTagName("p"); // p태그 요소
        console.log(bTN);
        
        const bCN = document.getElementsByClassName("child"); // 클래스 이름

        const qS = document.querySelector("#parent .child");
        console.log(qS);
        
        const qSA = document.querySelectorAll("#parent .child");
        console.log(qSA);
    });

    
};