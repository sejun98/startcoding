// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}


'use strict';

function sayHi(username) {
    console.log(`안녕하세요, ${username}입니다.`)
    return undefined;
}

// 호출
sayHi("이세준")


// 선언부 : 입력값의 세제곱을 반환하는 함수
function cube(num) {
    return num * num * num
}

const a = cube(2)
console.log(a)

// 파라미터 : 입력값을 저장하는 변수 !
// 필요에 따라 개수 조절 가능

// 라면 생성 자판기(함수) : 선택불가 (파라미터 : 0개)
function crateRamen() {
    return "라면"
}
const ramen = crateRamen();
console.log(ramen);

// 만두 생성 자판기(함수) : 재료 1개 선택나으 (파라미터 1개)
function createMandoo(ingredient) {
    return `${ingredient} 만두`
}

const mandoo1 = createMandoo("고기")
const mandoo2 = createMandoo("김치")
console.log(mandoo1)
console.log(mandoo2)

// 김밥 생성 자판기(함수) 재료 2개 선택 가능(파라미터 2개)
function createKimbob(a, b) {
    return `${a} ${b} 김밥`;
}
const kimbob1 =  createKimbob ("참치", "김치")
console.log(kimbob1)

// 스코프(scope),  변수의 활동 범위
function changeparmater(x) {
    x = x + 3;
    console.log(`x = ${x}`)
}

changeparmater(30)
// console.log(x); // error

// 지역변수란, 함수 또는 블럭 내부에 선언된 변수

function changeLocal(n) {
    let y = n + 1;
    console.log(`y = ${y}`)
}
changeLocal(20)
// console.log(y) error

// !이름은 같지만 스코프가 다른 경우