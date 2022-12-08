// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

// 1. DOM 이란
// - 브라우저가 웹페이지를 JS 객체화 하는 방식
// - 이를 위해 제공되는 대표 객체가 document
// - document: 웹페이지 문서 정보를 모두 지니는 객체
// docuemnt 객체 둘러보기
console.log(document)
console.log(document.URL)
console.log(document.title)

// 웹 제목 변경
document.title = "동적 웹사이트";

// 2. DOM객체 가져오기 2가지 방법이 있으나 후자를 권장함.
// - doucument.getElement~~~();
// - doucument.querySelector();

// h1 태그 제목을 변경
// const h1 = document.getElementById("heading")
const h1Tag = document.querySelector("#heading")
h1Tag.innerText = "DOM Object & Event"

// 3. 이벤트 처리
// - 이벤트란 선택, 클릭, 전송등의 특정 사건임
// - 이벤트의 처리는 크게 3단계로 동작함
// - targeting) 감시할 대상을 지정한 뒤,
// - listening) 특정 이벤트를 지속적으로 감시,
// -  handling) 이벤트 발생하면 동작을 수행!
// 타겟팅으로 대상을 지정을하고 리스닝으로 감시(지)후 핸들링으로 어떻게 처리할지 정한다.

// [연습1] 주문할게요(버튼 클릭 => 메시지 띄우기)
// 1) 대상 DOM 객체 가져오기  - 타겟팅
const orderBtn = document.querySelector("#order-bell")

// 2. 감시를 시작 - 리스닝
orderBtn.addEventListener("click", function(event) {
    // 3. 처리를 수행 - 핸들링
    alert("띵동")
})

// [연습2] 
// 1) 대상 DOM 객체 가져오기  - 타겟팅
const correctInput = document.querySelector("#answer-c");

// 2. 감시를 시작 - 리스닝
correctInput.addEventListener("change", function(event) {
    // 3. 처리를 수행 - 핸들링
    // 이벤트 발생 객체를 가져와야함
    const checkBox = event.target;
    const listItem = checkBox.parentNode; // 선택한 자식의 부모까지 할당됨
    // 체크 여부에 따라 동작을 수행
    if(checkBox.checked) {
        listItem.classList.add("text-primary")
    } else {
        listItem.classList.remove("text-primary")

    }

})

// // [연습3]
// const menuList = [];
// const resultDiv = document.querySelector("#order-list")

// const menuBtn0 = document.querySelector("#practice-3 button:nth-child(1)")
// menuBtn0.addEventListener("click",function (event){
//     // 3. 처리를 수행 - 핸들링
//     // 클릭된 버튼을 가져옴
//     const btn = event.target
//     // 버튼속 텍스트를 추출
//     const menuName = btn.innerText;
//     // 장바구니 배열에 담기
//     menuList.push(menuName)
//     // 장바구니 배열을 문서에 반영
//     resultDiv.innerText = `>> [${menuList}]이 주문되었습니다.`
// })

// [연습3] 
const menuList = [];
const resultDiv = document.querySelector("#order-list")
                                        // All은 배열을 반환한다.
const menuBtns = document.querySelectorAll("#practice-3 button")

// 모든 메뉴버트을 순회
for(let i = 0; i < menuBtns.length; i++) {

    menuBtns[i].addEventListener("click",function (event){
        // 3. 처리를 수행 - 핸들링
        // 클릭된 버튼을 가져옴
        const btn = event.target
        // 버튼속 텍스트를 추출
        const menuName = btn.innerText;
        // 장바구니 배열에 담기
        menuList.push(menuName)
        // 장바구니 배열을 문서에 반영
        resultDiv.innerText = `>> [${menuList}]이 주문되었습니다.`
    })
}
    