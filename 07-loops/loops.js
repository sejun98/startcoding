// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

//  술래잡기 시작 전, 숫자세기!
function countUpNumbers() {
    console.log("1부터 10까지 세고 시작한다~")
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
    console.log("찾는다~")
}
// countUpNumbers();

// 카운트 다운
function countDown() {
    for (let i = 5; i > 0; i--) {
        console.log(i)
    }
    console.log("끝")
}

// countDown();

// function playGame() {
//     console.log("시작")

//     const randInt = 5;

//     let inputNum = prompt("랜덤 정수 1~10을 입력해주세요.")

//     let inputNumInt = parseInt(inputNum);
//     if (inputNumInt == randInt) {
//         console.log(`x = ${randInt}, 정답입니다 O`)
//     }

//     console.log("끝")
// }

// playGame();

// 4. continue
function printDan(dan) {
    for (let j = 1; j <= 9; j += 1) {
        console.log(`${dan} x ${j} = ${dan * j}`);
    }
}
function printGuGuDan() {
    for (let i = 2; i <= 9; i += 1) {
        printDan(i);
    }
}
printGuGuDan();
