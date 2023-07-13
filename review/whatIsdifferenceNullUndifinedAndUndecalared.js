// null, undefined, undeclared의 차이점은? 어떻게 이 상태들에 대한 확인을 할 것인가요?

// Undeclared

// Undeclared 변수는 이전에 var, let, const를 사용하여 생성되지 않은 식별자에 값을 할당할 때 생성된다. 
// Undeclared 변수는 현재 범위 외부에 전역으로 정의된다. strict 모드에서는 Undeclared 변수에 할당하려고 할 때, ReferenceError가 발생한다. 
// Undeclared 변수는 전역 변수처럼 좋지 않다. 이것들은 모두 사용을 피하는 것이 좋다. 이를 검사하려면, 사용할 때 try/catch 블록에 감싸야한다.

function foo() {
    x = 1; // strict 모드에서 ReferenceError를 발생.
  }
  
  foo();
  console.log(x); // 1

// undefined
//  undefined 변수는 선언되었지만, 값이 할당되지 않은 변수다. 
// 이는 undefined 타입dl다. 함수가 실행 결과에 따라 아무값도 반환하지 않으면, 변수에 할당되며, 그 변수가 undefined 값을 갖sms다.
// 이를 검사하기 위해, 엄격한 (===) 연산자 또는 typeof에 undefined 문자열을 사용하여 비교하세요.
// 확인을 위해 추상 평등 연산자(==)를 사용해서는 안되며, 이는 값이 null이면 true를 반환합니다.

var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. 그런데 틀림. 이렇게 사용하지 말 것.

function bar() {}
var baz = bar();
console.log(baz); // undefined

// null
// null인 변수는 null 값이 명시적으로 할당된 것. 
// 그것은 값을 나타내지 않으며, 명시적으로 할당됐다는 점에서 undefined와 다르다.
// null을 체크하기 위해서 단순히 완전 항등 연산자(===)를 사용하여 비교하면 된다.
// 위와 같이, 추상 평등 연산자 (==)를 사용해서는 안되며, 값이 undefined이면 true를 반환한다.

var foo = null;
console.log(foo === null); // true

console.log(foo == undefined); // true. 그런데 틀림. 이렇게 사용하지 말 것.