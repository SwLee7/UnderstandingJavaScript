// "attribute"와 "property"의 차이점은?
// attribute는 HTML 마크업에 정의되지만 property는 DOM에 정의됩니다. 
// 차이점을 알아보기 위해 HTML에 다음 텍스트 필드가 있다고 가정해 보자.

{/* <input type="text" value="Hello">. */}

const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello


// 그러나 텍스트 필드에 "World!"를 추가하면 다음과 같이 된다.

console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello World!