# Component란 ?

하나의 기능 구현을 위한 여러 종류의 코드 묶음

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

“props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.
<br/>
<br/>

## Component 특징

컴포넌트는 기능 별로 하나의 컴포넌트로 작성하기 때문에 의존성이 낮아지고 독립적으로 작동한다.

컴포넌트는 재사용 가능하여 효율적인 개발이 가능하다.

<br/>

## Component 만들기

### 함수 컴포넌트

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

<br/>

### 클래스 컴포넌트

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<br/>

## Component 렌더링

1. App 컴퍼넌트는 여러개의 Welcome을 가지고 있습니다.
2. ReactDOM.render을 통해서 App 컴퍼넌트를 호출합니다.
3. App컴퍼넌트는 각 Welcome 컴퍼넌트를 호출합니다. (재사용)
4. 전달한 props에 따른 각각의 Welcome 컴퍼넌트 내용이 호출되는걸 확인 할 수 있습니다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```
