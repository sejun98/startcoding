// 1. 배열이란?
// - 여러 변수를 하나로 묶은 것
// - 배열의 각 요소는 인덱스로 구분 됨
// - 요소의 타입은 모두 같아야 좋음
// 배열 생성 예
const menus = ["샌드위치", "초밥", "치킨"];
const prices = [11000, 16000, 19000];
console.log(menus);
console.log(prices);

// 2. 배열 다루기
// - 인덱스는 기본적으로 0부터 시작
// - 인덱스를 통해 배열의 각 요소로 접근 가능
// 배열 요소 가져오기: 식비 총합 계산
let sum = prices[0] + prices[1] + prices[2];
console.log(`총합: ${sum} 원`);
// 배열 요소 변경하기: 배달비 추가
prices[0] += 2000;
prices[1] += 2000;
prices[2] += 2000;
console.log(prices);
// 최종 총합 계산
sum = prices[0] + prices[1] + prices[2];
console.log(`총합(배달비 포함): ${sum} 원`);

// 3. 배열 요소 추가하기
// - 끝자리 인덱스로 요소를 추가할 수 있음
// - push() 함수: 알아서 끝자리에 추가하므로 편리함
// 인덱스로 요소 추가
// menus[3] = "떡볶이";
// prices[3] = 3000;
menus.push("떡볶이");
prices.push(3000);
// menus[4] = "튀김";
// prices[4] = 3000;
menus.push("튀김");
prices.push(3000);
// menus[5] = "순대";
// prices[5] = 4000;
menus.push("순대");
prices.push(4000);
console.log(menus);
console.log(prices);

// 4. 배열과 반복문
// - 배열은 반복문과 함께 자주 사용 됨
// - 배열을 차례로 순회하는 경우가 많음
// - for 문, for..of, forEach 등과 함께 활용
// 배열을 순회하며, 총합 구하기(홍팍이의 식비 총합 계산)
sum = 0;
for (let i = 0; i < prices.length; i += 1) {
    sum += prices[i];
}
console.log(`총합(배달비 + 야식): ${sum} 원`);


// 5. 배열과 함수호출
// - 배열도 함수의 파라미터로 전달될 수 있음
// - 배열이 파라미터로 전달되는 경우, 원본이 전달됨(call by reference)
// - 일반변수가 파라미터로 전달되는 경우, 사본이 복사됨(call by value)
// 배열을 입력값으로한 함수 호출(주문 영수증 출력하기)
function printReceipt(menuArr, priceArr) {
    // 주문 목록 출력
    console.log("= 주문음식 목록 =");
    for (let i = 0; i < menuArr.length; i += 1) {
        console.log(`${menuArr[i]}: ${priceArr[i]} 원`);
    }
    // 총합 출력
    console.log("==============");
    const sum = totalPrice(priceArr);
    console.log(`총합: ${sum} 원`);
}
function totalPrice(priceArr) {
    let total = 0;
    for (let i = 0; i < priceArr.length; i += 1) {
        total += priceArr[i];
    }
    return total;
}
printReceipt(menus, prices);