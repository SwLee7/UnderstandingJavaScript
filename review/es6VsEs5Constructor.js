// ES6 클래스와 ES5 함수 생성자의 차이점은 무엇인가?

// ES5 함수 생성자
function Person(name) {
    this.name = name;
  }
  
  // ES6 클래스
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

//   간단한 생성자의 경우에는 매우 유사하다.

// 생성자의 주요 차이점은 상속을 사용할 때 발생합니다. Person의 하위 클래스이면서 studentId 필드를 추가로 가지고 있는 Student 클래스를 만들고자 했을 때 둘의 차이를 알아보자.

// ES5 함수 생성자
function Student(name, studentId) {
    // 수퍼 클래스의 생성자를 호출하여 수퍼 클래스에서 상속된 멤버를 초기화합니다.
    Person.call(this, name);
  
    // 서브 클래스의 멤버를 초기화합니다.
    this.studentId = studentId;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  // ES6 클래스
  class Student extends Person {
    constructor(name, studentId) {
      super(name);
      this.studentId = studentId;
    }
  }