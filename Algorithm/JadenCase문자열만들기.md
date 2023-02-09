문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12951
<br/>
<br/>
<br/>

## 풀이

```javascript
function solution(s) {
  let arr = s
    .split(' ')
    .map((el) => el.substr(0, 1).toUpperCase() + el.substr(1).toLowerCase());

  let result = arr.join(' ');

  return result;
}
```

#### 알게된 정보

`string.substr(start,length)` 같은경우 문자열에서 특정한 구간의 문자열을 추출할수있다. <br/>
인자로는 2개를 넣을수있는데 처음은 시각점 두번째는 끝나는점으로 설정이가능하다.<br/>
<br/>
`arr.join([separator])` 같은경우 배열의 모든 요소를 연결해 하나의 문자열로 만들수있다.<br/>
**separator**는 매개변수로, 배열의 각 요소를 구분할 문자열이다.<br/>
이 구분자는 필요한 경우 문자열로 변환되고, 생략하면 배열의 원소들의 쉼표로 구분된다.<br/>

<br/><br/>

### 다른풀이

```javascript
function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}
```
