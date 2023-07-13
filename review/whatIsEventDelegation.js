
// 이벤트 위임이란?

// 이벤트 위임이란 이벤트 버블링과 이벤트 갭처링을 활용한 방식으로 하위 요소에 이벤트 핸들러를 할당하는 것이 아니라 공통의 상위 요소에 이벤트 핸들러를 할당하는 것을 말한다.

// 이벤트 위임의 작동원리
// 이벤트 위임은 이벤트 버블링과 이벤트 캡처링에서 기인한다.

// 그렇다면 이벤트 버블링과 이벤트 캡처링이란 무엇일까?



// 이벤트 버블링(Event Bubbling)
//  이벤트 버블링이란 특정 HTML 요소에서 이벤트가 발생했을 때 해당 요소의 부모 요소들로 이벤트가 전달되는 현상을 말한다.

// 다시 말해, 자식 요소에서 발생한 이벤트가 부모 요소로 전달되며 그 과정에서 해당 이벤트에 연결된 핸들러가 동작한다.

<div id="parent">
  <button id="child">Click me!</button>
</div>
// 예를 들어 위와 같은 HTML 구조가 있다고 생각해보자.

// 여기서 'button' 요소를 클릭하면 'click' 이벤트가 발생한다.

// 이 때 이벤트는 'button'요소에서 처리되고나서 부모 요소인 'div'에서도 처리가 된다.

// 이벤트 캡처링(Event Capturing)
// 이벤트 캡처링은 이벤트 전파의 초기 단계로 이벤트가 최상위 요소에서 시작해 이벤트의 대상 요소(target element)까지 전달 되는 과정을 말한다.

// 캡처 단계에서는 이벤트가 발생한 대상 요소에 도달하기 전에 상위 요소에서 이벤트를 처리할 수 있다.

// 예를 들어 18Ln~20Ln과 같은 HTML 구조가 있다고 가정해보자.

// 여기에 이벤트 캡처링을 사용해서 '#parent' 요소에 이벤트 핸들러를 추가해보겠다.

document.querySelector('#parent').addEventListener('click', function(event) {
  console.log('Parent element clicked during capturing phase!');
}, true); // 마지막 매개변수로 true를 전달함으로써 이벤트 캡처링을 활성화

// 위 코드에서 '#child' 버튼을 클릭하면 캡쳐 단계에서 '#parent'요소의 이벤트 핸들러가 먼저 동작한다.

// console.log는 '#child' 버튼보다 '#parent'의 클릭 이벤트가 먼저 발생했다는 것을 알려준다.

// 그 후 이벤트는 target pahse로 전달되고 '#child' 요소의 이벤트 핸들러가 동작한다.

// 그리고 나서 마지막으로 버블링 단계에서 '#parent'요소의 이벤트 핸들러가 다시 동작한다.



// 이렇게 이벤트 캡처링은 이벤트 버블링과 반대의 방향으로 이벤트를 전달하고 이벤트 처리 순서를 제어할 수 있게 해준다.

// 따라서 이벤트 캡처링은 복잡한 이벤트 처리나 특정 상황에서 이벤트 전파 순서를 제어하고 싶을 때 사용하면 좋다.



// 다시 이벤트 위임으로 돌아가보자.



// 이벤트 위임(Event Delegation)
// 이벤트 위임은 주로 이벤트 버블링을 활용한 이벤트 처리 패턴이다.

// 이벤트 위임을 사용하면 여러 자식 요소에 개별적으로 이벤트 핸들러를 연결하지 않고 부모 요소에 하나의 이벤트 핸들러만 연결하는 것이 가능해진다. 그 후 이벤트가 발생했을 때 부모 요소에서 이를 처리한다.

document.querySelector('#parent').addEventListener('click', function(event) {
  if (event.target.id === 'child') {
    console.log('Child button was clicked!');
  }
});
// 이 코드에서는 #parent 요소에 클릭 이벤트 리스너를 추가하고, 이벤트가 발생했을 때 이벤트의 대상이 #child인지 확인한다.

// 이렇게 하면 #child 요소에서 발생하는 클릭 이벤트를 #parent 요소에서 처리할 수 있다.

// 이것이 바로 이벤트 위임의 작동 원리다.

// 이벤트 위임의 장점
// 이벤트 위임을 사용하면 메모리 사용량을 줄일 수 있고 동적으로 추가되는 자식 요소에 대해 자동으로 이벤트 핸들러가 연결되어 코드를 보다 효율적으로 관리할 수 있게 된다.

< ul  id = " parent-list " > 
	< li  id = " post-1 " > 항목 1 </ li > 
	< li  id = " post-2 " > 항목 2 </ li > 
	< li  id = " post-3 " > 항목 3 </ li > 
	< li  id = " post-4 " > 항목 4 </ li >
	< li  id = " post-5 " > 항목 5 </ li > 
	< li  id = " post-6 " > 항목 6 </ li > 
</ ul >
// 다음과 같이 하나의 <ul>의 자식 요소로 6개의 <li>가 있다고 가정해보자.

// 그리고 각 <li>를 클릭할 때마다 이벤트가 발생해야한다고 생각해보자.

document.getElementById("parent-list").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "LI") {

		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
// 이렇게 부모 요소에만 이벤트 핸들러를 달아준다면 자식 요소에 6개의 이벤트 핸들러를 달아주었을 때 보다 메모리 사용량을 줄일 수 있고 7번 째 항목...1,000만 번 째 항목이 추가되어도 1,000만번의 이벤트 핸들러를 달아주는 고생을 안해도 된다.