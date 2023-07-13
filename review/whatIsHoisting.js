// hoisting이란?
/*
hoisting이란 JavaScript에서 선언문을 해당 스코프의 최상위로 끌어올리는 동작이다.
hoisting은 컴파일 단계에서 발생하는데 실제로 변수와 함수 등의 선언이 물리적으로 코드의 상단으로 옮가는 것이 아니다.
단지 JavaScript 엔진이 코드를 해석하는 과정에서 선언문을 먼저 해석하는 것이다.
여기서 중요한 점은 Hoisting은 선언만 끌어올라오고 할당은 원래의 위치에서 일어난다는 것이다.
*/

// 변수 Hoisting

console.log(myName); // undefined

var myName = "SWLee"

console.log(myName); // SWLee
/*
이 코드에서 Line.8의 console.log(myName)이 실행되는 시점에 myName은 이미 선언됐지만 아직 값이 할당 되지 않은 상태다.
따라서 undefined를 출력한다.
하지만 Line.10의 console.log(myName)이 실행되는 시점에는 myName도 선언 됐고 값도 "SWLee"라고 할당된 상태다.
따라서 SWLee를 출력한다.
*/

// 함수 Hoisting_함수 선언문
console.log(myFunction()); // "Hello, world!"

function myFunction() {
    return "Hello, world!";
}

/*
이 코드에서 myFunction은 코드의 상단으로 호이스팅 되기에 함수 선언보다 먼저 함수를 호출해도 정상적으로 작동한다.
따라서 Hello, world!를 출력한다.


*/
console.log(myFunction()); // TypeError: myFunction is not a function

var myFunction = function() {
    return "Hello, world!";
};
/*
하지만 변수로 할당하는 함수 표현식은 변수 Hoisting과 동일하게 작동한다.
즉 선언은 끌어올려지지만 할당은 끌어올려지지 않는다.
따라서 TypeErorr를 발생시킨다.(함수를 출력해달라고 했는데 함수가 없기 때문에 TypeError가 발생한다.)
*/


