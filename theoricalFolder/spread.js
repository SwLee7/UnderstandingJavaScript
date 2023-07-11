// spread 문법을 사용할 때의 이점은 무엇이며 rest 문법과 다른 점은 무엇인가?
// ES6의 spread 문법은 함수형 패러다임에서 코딩할 때 매우 유용하다. 
// 왜냐하면 Object.create, slice나 라이브러리 함수를 사용하지 않고도 배열이나 객체의 복사본을 쉽게 만들 수 있기 때문이다.
// 이 언어 기능은 Redux나 RxJS를 사용하는 프로젝트에서 많이 사용됩니다.

function putDookieInAnyArray(arr) {
    return [...arr, 'dookie'];
  }
  
  var result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]
  
  var person = {
    name: 'Todd',
    age: 29,
  };
  
  var copyOfTodd = {...person};

//   ES6의 rest 구문은 함수에 전달할 임의의 수의 인수를 포함하는 약식을 제공한다. 
//   이는 데이터의 배열을 채우기보다는 데이터를 가져와서 배열로 채우는 spread 구문의 반대와 비슷하며, 배열이나 객체 디스트럭쳐링 할당뿐만 아니라 함수 인수에서도 작동한다.

function addFiveToABunchOfNumbers(...numbers) {
    return numbers.map((x) => x + 5);
  }
  
  const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]
  
  const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]
  
  const {e, f, ...others} = {
    e: 1,
    f: 2,
    g: 3,
    h: 4,
  }; // e: 1, f: 2, others: { g: 3, h: 4 }