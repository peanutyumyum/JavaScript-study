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

"=============================================================================================================================="

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

"=============================================================================================================================="

// DOM(Document Object Model) 다루기
// 웹페이지에 접근 할 수 있게 해주는 인터페이스이다.
// 아래의 코드는 구글홈페이지(https://google.com)를 참고하여 작성되었으니, 구글 홈페이지를 이용할 것

// ID로 DOM객체 선택하기
let idObj = document.getElementById("gb"); // gb이라는 ID값을 가진 Node를 선택하기. 선택하면 선택된 Node 아래의 모든 자식들도 다 가져온다.

// Class로 DOM객체 선택하기
let classObj = document.getElementsByClassName("ctr-p"); // ctr-p이라는 Class값을 가진 Node를 선택하기. 선택하면 선택된 Node가 리스트 형태로 가져온다(Class는 여러 개가 존재 할 수 있기 때문에)

// CSS 선택자로 DOM객체 선택하기
let selectorObj = document.querySelector("#gb"); // gb이라는 ID값(#은 CSS상에서 ID 선택자이므로)을 가진 Node를 선택하기
let selectorObjs = document.querySelectorAll(".content"); // content이라는 Class값(.은 CSS상에서 Class 선택자이므로)을 가진 모든 Node를 선택하기. 선택하면 선택한 Node가 리스트 형태로 가져온다.
let selectorobj = document.querySelector("#gbw > div > div > div.gb_je.gb_i.gb_Hg.gb_xg > div:nth-child(1) > a"); // 다음과 같이 경로를 지정해 줄 수도 있다.

// 선택한 DOM객체의 자료 바꾸기
selectorObj.style = "color:yellow; background-color:black;"; // 선택된 Node의 CSS속성을 변경해준다
selectorObj.innerText = "으악"; // 선택된 Node의 text를 변경해준다
selectorObj.innerHTML = '<a href="https://naver.com">네이버</a>'; // 선택된 Node의 HTML테그를 변경해준다
selectorObj.href = "https://naver.com"; // 선택된 Node의 href속성을 변경해준다

let newNode = document.createElement("p"); // p테그 생성
newNode.innerText = "새로운 테그";
selectorObj.appendChild(newNode); // selectObj밑에 자식으로 newNode를 추가하겠다.

"=============================================================================================================================="

// 함수
// 기본적인 형태
function ver1_appendNewNode(target, tag="p", text="기본값") { // JavaScript 함수의 인자는 3개를 받을 수 있다.(하나의 틀을 만든다고 생각하라)
    let newTag = document.createElement(tag);
    newTag.innerText = text;

    target.appendChild(newTag);
}

let targetNode = document.querySelector("#gbw > div > div > div.gb_je.gb_i.gb_Hg.gb_xg > div:nth-child(1) > a");

ver1_appendNewNode(targetNode) // 함수실행
ver1_appendNewNode(targetNode, "a") // 원래는 p테그로 생성되어야 하지만, 인자에 a를 넣어줌으로써 a테그로 생성되게끔 커스터마이징 하였다
ver1_appendNewNode(targetNode, "a", "다른 텍스트지롱") // 원래는 "기본값"이라는 텍스트로 생성되어야 하지만, "다른 텍스트지롱" 이라는 텍스트로 생성되었다

// 익명함수
let ver2_appendNewNode = function(target, tag="p", text="기본값") { // 변수 = function 로 하여 함수를 생성하였다
    let newTag = document.createElement(tag);
    newTag.innerText = text;

    target.appendChild(newTag);
}
ver2_appendNewNode(targetNode) // 함수실행

// 화살표함수
let ver3_appendNewNode = (target, tag="p", text="기본값") => { // =>를 사용하여 함수를 생성하였다
    let newTag = document.createElement(tag);
    newTag.innerText = text;

    target.appendChild(newTag);
}
ver3_appendNewNode(newNode) // 함수실행