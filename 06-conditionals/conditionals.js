// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

// 상황 설명
// -- 소개팅 상대가 맘에들면, 라떼를 주문하기로
// == 맘에 안들면 아이스 아메리카노
function orderBeverage(isAttractive) {
    if(isAttractive == "yes") {
        console.log("라떼 주세요~")
    } else if (isAttractive == "not yes") {
        console.log("레모나나 먹을란다.~")
    } else {
        console.log("아이스 아메리카노 ㅠㅠ")
    }
}

orderBeverage("yes")
orderBeverage("not yes")
orderBeverage("no")