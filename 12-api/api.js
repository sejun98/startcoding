// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

// Web API란
// - 웹 개발을 돕는, 잘 만들어진 도구들(제공되는 객체와 함수등의 코드)
// - 예: console.log(), document.querySelector(), Array.push(), ..
// - 구글링: 자바스크립트 Web API란
// - 참조: https://developer.mozilla.org/ko/

// 1. Date & String 클래스
// - Date: 특정 시간을 객체로 다루기 위한 틀
// - String: 문자열을 객체로 다루기 위한 틀
// - 구글링: 자바스크립트 Date 클래스, 자바스크립트 문자열 split
// - 참조: https://developer.mozilla.org/ko/ 에서 검색
// [연습1] 알게된지, 벌써 ???일(시간 간격 구하기)
// 1) 시간 객체를 생성

const firstDate = new Date("2022-02-12")
const the100thDate = new Date("2022-11-04"); // 100days

const ms = the100thDate.getTime() - firstDate.getTime()
console.log(ms)

const sec = ms / 1000 // 초
console.log(sec)

const min = sec / 60 // 분
console.log(min)

const hour = min / 60 // 시
console.log(hour)

const day = hour / 24 // 날
console.log(day+"일")

console.log(firstDate.toISOString().split("T")[0])

const clone = new Date(the100thDate)
// 2022-11-04 - 265일
clone.setDate(clone.getDate() - 265);
console.log(clone.toISOString().split("T")[0])

// [연습2] 기념 선물, 여러 선물들 중 택1(랜덤 박스)
// 0) 처리함수
function openRandBox() {
    // a. 선물 객체 배열 생성
    const items = [
        {name: "지갑", price: 168000, desc: "컴순이가 지갑을 안들고 다니던데, 이번 기회에 선물해주면 어떨까..?"},
        {name: "향수", price: 82000, desc: "좋은향 싫어하는 여자는 없다! 근데 컴순이 향수 취향을 모르는데.."},
        {name: "아이패드", price: 1200000, desc: "대학생에게 이만한 선물이 있을까? 문제는 가격이라능.."},
        {name: "에어팟", price: 359000, desc: "한번 써보면, 줄이어폰으로 못돌아 간다는 그 아이템..!"},
        {name: "애플워치", price: 359000, desc: "함께 커플로 애플워치를 하고 싶어..!"},
    ]
    // b. 랜덤 선물 선정
    const randFloat = Math.random() * items.length
    const randInt = Math.floor(randFloat); // 소수점 없애기
    const pickedItem = items[randInt];
    console.log(pickedItem)
    
    // c. 브라우저에 반영(DOM객체에 반영)\
    const cardTitle = document.querySelector("#practice-2 .card-body h5.card-title");
    const cardPrice = document.querySelector("#practice-2 .card-body h6.card-subtitle");
    const cardText = document.querySelector("#practice-2 .card-body p.card-text");

    cardTitle.innerText = pickedItem.name;
    cardPrice.innerHTML = `${pickedItem.price.toLocaleString()}원`;
    cardText.innerHTML = pickedItem.desc


}
// 1) 이벤트 감시 대상 가져오기
const pickBtn = document.querySelector("#practice-2 .card-body a.btn");
// 2) 이벤트 감지 시작 및 처리함수 연결
pickBtn.addEventListener("click", function(event) {
    // 3) 클릭 이벤트 처리
    // 3.1) 화살표 함수로 변경
    setTimeout(() => {console.log(3), 0});
    setTimeout(() =>{ console.log(2); }, 1000);
    setTimeout(() =>{ console.log(1); }, 2000);
    setTimeout(() =>{openRandBox()}, 3000);
});

    



