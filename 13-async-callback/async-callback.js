// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

// 1. 동기 함수(synchronous function)
// - 순차적으로 수행되는 함수
// - 결과물을 받아야만, 다음을 진행할 수 있음
// - 👍 장점: 실행 흐름 파악, 쉬움
// - 👎 단점: 대기시간 누적으로, 처리지연 증가

// 동기적 시간 지연 함수
function sleep(ms) {
    const wakeupTime = Date.now() + ms

    while(Date.now() < wakeupTime) {
        // do nothing, just wating...
    }
}
// 집안일 동기적 처리하기
function synchronousSample() {
    // 집안일 하기(세탁-재료손질-요리-식사-설겆이)
    sleep(6000); // 6.0초 대기(편의상 10분 => 1초로 간주)
    console.log("세탁기 돌리기(60분)");
    sleep(1500); // 1.5초 대기
    console.log("재료 손질(15분)");
    sleep(2000); // 2.0초 대기
    console.log("요리하기(20분)");
    sleep(1500); // 1.5초 대기
    console.log("식사하기(15분)");
    sleep(1000); // 1.0초 대기
    console.log("설겆이하기(10분)");
} // 순서 대로 나옴
// synchronousSample();

// 2. 비동기 함수(asynchronous function)
// - 비순차적으로 수행되는 함수
// - 결과물을 받지 않고, 다음을 진행
// - 주로 외부 자원(서버, DB, API, ..) 네트워크 요청 시, 사용
// - 👍 장점: 요청 결과를 기다리지 않고, 다른 작업이 가능(시간단축)
// - 👎 단점: 실행 흐름 파악이 어려울 수 있음
// - 예: setTimeout(), fetch(), ...

// 집안일 비동기로 처리(편의상 10분 => 1초로 간주)
function ashunchronousSample() {
    const start = Date.now()

    // 세탁 
    // setTimeout(수행할함수, 지열될 시간)
    setTimeout(() => {
        console.log("세탁돌리기(60분)")
    }, 6000)
    setTimeout(() => {
        console.log("재료손질(15분)")
    }, 1500)
    setTimeout(() => {
        console.log("요리하기(20분)")
    }, 2100)
    setTimeout(() => {
        console.log("식사하기(15분)")
    }, 1500)

    // 총 수행시간
    const end = Date.now()

    console.log(`총 수행시간 ${ end - start }`)

}
// ashunchronousSample();

// 3. 콜백(callback: do next..)
// - 함수를 파라미터로 받아, 함수 호출의 하는 기법
// - 비동기 함수의 연속성을 위해, 주로 사용
// - 예1: setTimeout(callback, delay)
// - 예2: addEventListener(event, callback)

// 집안일을 위한 콜백 함수
function housework (task, delay, doNext) {
    setTimeout(() => {
        console.log(task)
        doNext(); // 콜백 수행 : 파라미터로 전달된 함수로 전달.
    }, delay)
}

// 집안이라기, 콜백으로 비동기 함수의 연속성(순서, 종속성) 부여
function callbackSample() {
    const start = Date.now()
    housework("세탁기 돌리기(60분)", 6000, function() {
        console.log(`세탁 완료까지 : ${(Date.now() - start)/100}분`)
    })
    
    housework("재료 손질(15분)", 1500, function() {
        housework("요리하기(20분)", 2000, function() {
            housework("식사하기(15분)", 1500, function() {
                housework("설겆이하기(20분)", 1500, function() {
                    console.log(`재료 손질부터 ~ 설거지 완료까지 : ${(Date.now() - start)/100}분`)
                })
            })
        })
    })
}
callbackSample()
