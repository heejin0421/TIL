# State

state는 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용되며, 컴포넌트 안에서 데이터를 변경할 수 있습니다. 즉, State는 한 컴포넌트의 상태를 나타낸다.

```javascript
import React, { useState } from "react";

const Text = ({ text }) => {
  return <div>{text}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Text text={count} />
      <div onClick={() => setCount(count + 1)}>+</div>
    </div>
  );
};
```

React의 함수 컴포넌트에서는 state를 사용하기 위해 useState라는 훅(Hook)을 사용해야 한다.
useState는 State 변수의 초기값을 매개변수로 전달 하여 호출하며, 결과값으로는 배열을 반환하게 된다.
반환된 배열에서는 useState 함수를 호출할 때 설정한 초기값이 할당된 변수와 해당 변수를 수정하기 위한 Set함수가 포함되어 있다.
