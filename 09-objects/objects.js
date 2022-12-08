// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

const ramen = {
    name: "뽀글이",
    price: 3000
};
const chicken = {
    name: "슈넬치킨",
    price: 5000
};
const coke = {
    name: "코카콜라",
    price: 1000
};
const americano = {
    name: "아메리카노",
    price: 1500,
};

// 객체 출력
console.log("== 메뉴판 ==");
console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);

// 2. 프로퍼티 다루기(읽기, 쓰기)
// 닷 연산 : 객체의 키를 통해 값을 가져옴
// 대괄호 연산 : 객체의 키를 조작하여 값을 가져올 수 있음

// 가격이 500원씩 올랐다.
// 객체 값 변경(닷연산)
ramen.price += 500;
chicken.price += 500;
coke.price += 500;
americano.price += 500;

console.log("메뉴 가격 인상")
console.log(`${ramen.name} (${ramen.price})원 `)
console.log(`${chicken.name} (${chicken.price})원 `)
console.log(`${coke.name} (${coke.price})원 `)
console.log(`${americano.name} (${americano.price})원 `)


// 객체 값 변경(대괄호 연산)
ramen["price"] += 500;
chicken["price"] += 500;
coke["price"] += 500;
americano["price"] += 500;

console.log("##메뉴 또 가격 인상##")
console.log(`${ramen.name} (${ramen.price})원 `)
console.log(`${chicken.name} (${chicken.price})원 `)
console.log(`${coke.name} (${coke.price})원 `)
console.log(`${americano.name} (${americano.price})원 `)


// 3. 객체 확인하기
    const sejun = {
        name : "세준",
        level : 30,
        hp : 100,
        mp : 150,
        skils : ["에너지볼트", "파이어볼트", "토네이도"]
    }

    // 객체 상태 출력
    console.log(sejun)

    // for..in 루프로 프로퍼티 순회
    for(let key in sejun) {
        console.log(`${key} : ${sejun[key]}`)
    }

    // in 연산자로 프로퍼티 존재여부 확인
    console.log("name" in sejun)

// 4. 객체 배열 생성 및 순회
    // - 객체 또한 배열에 담길 수 있음
    // - 대표 배열 순회법: for, for..of, forEach, ..

    // 애용내역 객체 배열 만들기
    const arr = [
        {name : "겜방 3시간", price : 3000},
        {name : "슈넬치킨", price : 4000},
        {name : "코카콜라", price : 6600},
        {name : "아메리카노", price : 2000},
    ]

    // 내역 출력
    console.log("== 이용 내역 출력 ==")
    for (let i =  0; i < arr.length; i++) {
        console.log(`${arr[i].name} (${arr[i].price}) 원`)
    }

    // for..of
    // for (let item of arr) {
    //     console.log(item)
    // }

    // 총합 계산
    console.log("총합 계산")
    let sum = 0
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i].price
    }
    console.log(`${sum} 원`)
