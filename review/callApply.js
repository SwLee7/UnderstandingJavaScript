// .call과 .apply의 차이점
// .call과 .apply는 모두 함수를 호출하는데 사용되며, 첫 번째 매개변수는 함수 내에서 this의 값으로 사용된다.
// 그러나 .call은 쉼표로 구분된 인수를 두 번째 인수로 취하고 
// .apply는 인수의 배열을 두 번째 인수로 취한다. 
// call은 C: Comma 로 구분되며, apply는 인수 배열인 A: arguments다.

function add(a, b) {
    return a + b;
  }
  
  console.log(add.call(null, 1, 2)); // 3
  console.log(add.apply(null, [1, 2])); // 3