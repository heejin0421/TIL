# Props란?

상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용한다.
<br/>
<br/>

## Props 특징

- 컴포넌트의 속성(property)을 의미한다.
- 부모 컴포넌트(상위 컴포넌트)로부터 전달받은 값이다.
- 어떤 타입의 값도 전달할 수 있도록 props는 객체의 형태를 가진다.
- 성별이나 이름처럼 외부로부터 전달받아 함부로 변경될 수 없는 읽기전용 객체이다.
  <br/>
  <br/>

## Props 사용법

props를 사용하는 방법은 3단계 순서로 나눌 수 있다.

1. 하위 컴포넌트에 전달하고자 하는 값(data)과 속성을 정의한다.
2. props를 이용하여 정의된 값과 속성을 전달한다.
3. 전달받은 props를 렌더링한다.

```javascript
function Parent() {
  return (
    <div className="parent">
      <h1>I'm the parent</h1>
      <Child text={"I'm the eldest child"} />
      <Child />
    </div>
  );
}

function Child(props) {
  return (
    <div className="child">
      <p>{props.text}</p>
    </div>
  );
}

export default Parent;
```
