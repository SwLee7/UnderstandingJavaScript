// 오브젝트 속성이나 배열 항목을 반복할 때 사용하는 언어 구문은 무엇인가?

// 오브젝트의 경우:

// for-in 반복 - for (var property in obj) { console.log(property); }. 그러나, 이는 상속된 속성도 반복되며, 사용하기 전에 obj.hasOwnProperty(property) 체크를 추가해야 한다.
// Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys()는 전달하는 객체의 열거 가능한 모든 속성을 나열하는 정적 메서드다.
// Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames()는 전달하는 객체의 열거 가능한 속성과 열거불가능한 모든 속성을 나열하는 정적 메서드다.

// 배열의 경우:

// for 반복 - for (var i = 0; i < arr.length; i++). 여기에 있는 일반적인 함정은 var이 함수 스코프고 블록 스코프가 아니며, 대부분 블록 스코프의 반복자 변수를 원할 것이라는 점입니다. ES2015에는 블록 범위가 있는 let이 추가됐고, 이를 대신 사용할 것을 권장한다. 그래서 다음과 같이 됩니다. for (let i = 0; i < arr.length; i++).
// forEach - arr.forEach(function (el, index) { ... }). 필요한 것이 배열의 요소라면 index를 사용할 필요가 없기 때문에 이 구문이 더 편리 할 수 ​​있다. 또한 every과 some메서드를 이용하여 반복을 일찍 끝낼 수 있다.
// for-of 반복 - for (let elem of arr) { ... }. ES6는 String, Array, Map, Set 등과 같은 iterable protocol을 준수하는 객체를 반복 할 수 있게 해주는 새로운 for-of 루프를 도입했다. for 루프의 장점은 루프에서 벗어날 수 있다는 것이고, forEach()의 장점은 카운터 변수가 필요 없기 때문에 for 루프보다 간결하다는 것이다. for-of 루프를 사용하면, 루프에서 빠져 나올 수도 있고 더 간결한 구문도 얻을 수 있다.
//  ES6 이전에는 for 루프를 사용하여 루프를 조기 종료해야 할 때 break를 사용했다. 그러나 이제 ES6에서는 for-of루프를 사용하여 이를 수행 할 수 있다. 루프 당 반복자를 두 번 이상 늘리는 것과 같이 유연성이 더 필요하다면, for 루프를 사용할 것이다.

// 또한, for-of 루프를 사용할 때 각 배열 요소의 인덱스와 값에 모두 접근해야하는 경우 ES6 Array의 entries() 메소드와 destructuring을 사용하면 된다.
const arr = ['a', 'b', 'c'];

for (let [index, elem] of arr.entries()) {
  console.log(index, ': ', elem);
}