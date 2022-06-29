# 함수 (Fuction)

> JavaScript에서 기본적인 구성 블록 중의 하나입니다. 함수는 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차입니다.
> 함수를 사용하려면 함수를 호출하고자 하는 범위 내에서 함수를 정의해야만 합니다.

<br/>

## 함수 선언

---

```javascript
function add(num1, num2) {
  //return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨
  return num1 + num2;
}
```

### 함수 호출

```javascript
const result = add(1, 2);
console.log(result); // 3
```

```javascript
// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료
function print(num) {
  if (num < 0) {
    return;
  }
}
```

<br/>

## 함수 표현식

---

`const name = function () {}`

```javascript
let add = funtion(a,b){
    return a+b;
};
console.log(add(1,2));
```

### 화살표 함수

`const name = () => {}`

```javascript
add = (a, b) => {
  return a + b;
};
```

<br/>

## 생성자 함수

---

함수 이름의 **첫글자는 대문자**로 시작하며 \*`new`연산자로 자바스크립트 함수를 생성자로 호출하면, 다음과 같은 순서로 동작한다
<br/>

**1.빈 객체 생성 및 this 바인딩**
<br/>
생성자 함수가 실행되기 전 빈객체가 생성된다.
바로 이 객체가 생성자 함수가 새로 생성하는 객체이며, 이 객체는 `this`로 바인딩 된다.
따라서 이후 생성자 함수 코드 내부에서 사용된 `this`는 이 빈객체를 가리킨다. 생성자 함수가 생성한 객체는 자신을 생성한 **생성자 함수의 프로퍼티**가 가리키는 객체를 **자신의 프로토 타입 객체**로 설정한다.
<br/>

**2.this를 통한 프로퍼티 생성**<br/>
함수 내부에서 `this`를 사용해서, 앞에서 생성된 빈 객체에 동적으로 프로퍼티나 메서드를 생성할수 있다.
<br/>

**3.생성된 객체 리턴**<br/>
리턴문이 없을 경우, `this`로 바인딩된 새로 생성한 객체가 리턴된다.

```javascript
function Fruit(name, emoji) {
  // 빈 객체가 생성되고 this에 저장한다.
  // this = {};

  // 함수가 실행된다.
  // this는 객체 {}기 때문에 this.name = name 구문은 객체에 name 값을 넣는 것과 같다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this;
}

const apple = new Fruit("apple", "🍎");
console.log(apple); // Fruit {name : apple, emoji: "🍎"}
```

<br/>

## 콜백함수

---

### 일급함수(first-class function)

함수가 일반 객체처럼 모든 연산이 가능한것

- 함수의 매개변수로 전달
- 함수의 반환값
- 할당 명령문
- 동일 비교 대상

### 고차함수(Higher-order function)

- 인자로 함수를 받거나
- 함수를 반환하는 함수를 고차함수

```javascript
//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 1, add); // 2
calculator(2, 3, multiply); // 6
```

<br/>
<br/>
<br/>
<br/>
<br/>

reference
<br/>

- https://mylko72.gitbooks.io/front-end-note/content/constructormd.html
- https://bamdule.tistory.com/196
