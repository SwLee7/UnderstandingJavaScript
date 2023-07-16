// .forEach 루프와 .map() 루프 사이의 주요 차이점

// forEach

// 배열의 요소를 반복한다.
// 각 요소에 대하여 callback을 실행한다.
// 값을 return하지 않는다.

    // 예시
const numbers = [1,2,3];
const doubled = numbers.forEach((num, index) => {
 num * 2
});
// doubled는 forEach로 반복하기 때문에 함수는 실행되지만 return 값이 없다.

// map

// 배열의 요소를 반복한다.
// 각 요소에서 함수를 호출하여 결과로 새 배열을 작성해 각 요소를 새로운 요소에 mapping한다.


    // 예시
const a = [1, 2, 3];
const triple = a.map((num) => {
  return num * 3;
});

// doubled = [3, 6, 9]

// 따라서 forEach와 map의 결정적인 차이점은 forEach는 return 값이 없지만.map()이 새로운 배열을 return한다는 것이다.
// 단순히 배열을 반복할 필요가 있다면 forEach를 사용하면되고,
// 결과가 필요하지만 원본 배열을 변경하고 싶지 않으면 map을 사용하면된다.
// 끝