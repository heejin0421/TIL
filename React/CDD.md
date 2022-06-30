# CDD (Component-Driven Development)

> **개발 방법 중의 하나로, 부품 단위로 UI 컴포넌트를 만들어 나가는 개발 방법이다.**
> CDD가 트렌드가 되면서, 이를 지원하는 도구 중 하나인 Component Explorer(컴포넌트 탐색기)가 등장 했다.

구조적 CSS 작성 방법의 발전 과정 <br/>
CSS > SASS > BEM > Styled Components

## Storybook

> UI개발, Component Driven Development를 하기 위한 도구이다.

각각의 컴포넌트들을 따로 볼 수 있어, 전체 UI를 한눈에 보고 개발할 수 있다.<br/>
재사용성을 확대하기 위해 컴포넌트를 문서화한다.

자동으로 컴포넌트를 시각화하여 시뮬레이션할 수 있는 다양한 테스트 상태를 확인할 수 있다.

사전에 버그를 방지하며 테스트 및 개발 속도를 향상한다.
기본적으로 독립적인 개발환경에서 실행되기 때문에 상황에 구애받지 않고 UI 컴포넌트를 집중적으로 개발할 수 있다.

주요 기능

- UI 컴포넌트들을 카탈로그 화하기
- 컴포넌트 변화를 Stories로 저장하기
- 핫 모듈 재 로딩과 같은 개발 툴 경험을 제공하기
- 리액트를 포함한 다양한 뷰 레이어 지원하기

## Styled-Componet

> CSS-in-JS: 컴포넌트 기반으로 CSS를 작성할 수 있게 도와주는 라이브러리

### 설치하기

```
$ npm install --save styled-components
```

#### 1. 컴포넌트 만들기

```javascript
const 컴포넌트이름 = styled.태그종류`
  css속성1: 속성값;
  css속성2: 속성값;
`;
```

#### 2. 컴포넌트를 재활용해서 새로운 컴포넌트 만들기

```javascript
const 컴포넌트이름 = styled(재사용할 컴포넌트)`
  추가할 CSS속성1 : 속성값;
  추가할 CSS속성2 : 속성값;
`;
```

#### 3. Props 활용하기

```javascript
const 컴포넌트이름 = styled.태그종류`
  CSS속성 : ${(props)=>함수 코드}
`;
```

#### 1) Props로 조건부 렌더링하기

```javascript
const Button = styled.button`
  background: ${(props) => (props.skyblue ? "skyblue" : "white")};
`;
```

삼항연산자를 활용해 `<Button>` 컴포넌트에 `skyblue` 라는 props가 있는지 확인하고, 있으면 배경색으로 `skyblue`를, 없을 경우 `white`를 지정해주는 코드이다.

#### 2) Props 값으로 렌더링하기

```javascript
const Button = styled.button`
  background: ${(props)=>props.color?props.color:"white"}
`;

<Button>Button1</Button> //흰색버튼
<Button color="orange">Button2</Button> // 오랜지버튼
<Button color="tomato">Button3</Button> // 빨강버튼
```

`props.color` 가 없다면 `white`를, `props.color` 가 있다면 `props.color`의 값을 그대로 가져와서 스타일 속성 값으로 리턴해주고 있는 것을 볼 수 있다. 그 결과 `color` 라는 이름으로 받은 props의 값으로 배경색이 지정된 것을 확인할 수 있다

### 4. 전역 스타일 설정하기

1. 전역 스타일을 설정하기 위해 Styled Components에서 `createGlobalStyle`함수를 불러온다.

```javascript
import { createGlobalStyle } from "styled-components";
```

2. 함수를 사용해 CSS파일에서 작성하듯 설정해주고 싶은 스타일을 작성한다.

```javascript
const GlobalStyle = createGlobalStyle`
  button {
    padding: 5px;
    margin: 2px;
    boder-radius : 5px;
  }
`;
```

3. `<GlobalStyle>`컴포넌트를 최상위 컴포넌트에서 사용해주면 전역에 `<GlobalStyle>`컴포넌트의 스타일이 적용된다.

```javascript
function App() {
  return (
    <>
      <GlobalStyle />
      <Button>전역 스타일 적용하기</Button>
    </>
  );
}
```
