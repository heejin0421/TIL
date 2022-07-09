# JSX란?

React에서 UI를 구성할 때 사용하는 문법으로 JavaScript를 확장한 문법이다.

이 문법을 이용해서 React 엘리먼트를 만들 수 있다.

<br/>
<br/>

## JSX 규칙

**1. 하나의 엘리먼트 안에 모든 엘리먼트가 포함**

JSX에서 여러 엘리먼트를 작성하고자 하는 경우, 최상위에서 opening tag와 closing tag로 감싸주어야 한다.

```javascript
<div>
  <div>
    <h1>Hello</h1>
  </div>
  <div>
    <h2>world</h2>
  </div>
</div>
```

<br/>

**2. 엘리먼트 클래스 사용 시, className으로 표기**

```javascript
<div className="greeting">Hello!</div>
```

<br/>

**3. JavaScript 표현식 사용시, 중괄호 `{ }` 이용**

```javascript
function App() {
  const name = "Josh Perez";

  return <div>Hello, {name}</div>;
}
```

<br/>

**4. 사용자 정의 컴포넌트는 대문자로 시작**

소문자로 작성시 일반적인 HTML 엘리먼트로 인식한다.

대문자로 작성된 JSX 컴포넌트를 따로 사용자 정의 컴포넌트라고 부른다.

```javascript
function Hello() {
  return <div>Hello!</div>;
}

function HelloWorld() {
  return <Hello />;
}
```

<br/>

**5. 조건부 렌더링에는 삼항연산자 사용**

```javascript
<div>{1 + 1 === 2 ? <p>정답</p> : <p>탈락</p>}</div>
```

<br/>

**6. 여러 개의 HTML 엘리먼트를 표시할 때, map() 함수를 이용**

map 함수를 사용할 때는 반드시 "key" JSX 속성을 넣어야 한다.

```javascript
const posts = [
    {id:0, title: "Hello", content: "Welcome to learning"},
    {id:1, title: "Good", content: "You can do it"}
]

function Blog(){
    const content = posts.map(post) =>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
};

return (
    <div>
        {content}
    </div>
)
```
