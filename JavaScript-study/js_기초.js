// 자바스크립트의 데이터 타입
// Boolean, Null, Undefined, Number, String, Symbol, Object(파이썬의 딕셔너리와 비슷)

// 변수 선언 방식

// var
//// Hoisting
//// Function scope 변수(타 언어와 다른 점)
//// 중복 선언 가능
//// 예측하기 어려운 코드를 만들 수 있다

// let
//// block scope 변수(타 언어와 비슷하게 동작)

// const
//// 변하지 않는 데이터를 저장 (ex:원주율, 객체)

let booleanVal = true
let numberVal = 0
let nullVal = null
let undefinedVal = undefined
let stringVal = 'string'
let objectVal = {
    name : '홍길동',
    age : 18,
    phoneNumber : "010-0000-0000"
}

typeof(booleanVal)

// for문 사용하기
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const numInfo = {"one" : "first", "two" : "second", "three" : "third"};

for (const i in numInfo) {
    console.log(`기수 : ${i}, 서수 ${numInfo[i]}`); // `` = 포메팅을 할 때 사용
}

// while문 사용하기
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

// if문 사용하기
let score = prompt("점수를 입력하세요", 0) // prompt는 파이썬의 input이랑 같음 prompt("메시지내용", defalt값)의 형식으로 사용
if (score >= 90) {
    console.log("A+");
} else if (score >= 80){
    console.log("B+")
} else if (score >= 70){
    console.log("C+");
} // if문을 사용할 때는 {} 사용한다. 그래서 위에 else if에 {}를 하게 된 이유는 if가 있기 때문!