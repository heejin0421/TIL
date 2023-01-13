# Next.j란

Next.js는 따로 설정을 해주지 않고도 SSR, SEO부터 TypeScript까지 생산에 필요한 많은 기능들을 제공하는 강력한 React 프레임워크이다.

## SSR

Next.js를 사용하는 가장 큰 이유는 SSR이다.<br/>
SSR에 대해서 이해하려면 이와 반대 개념인 CSR과 싱글 페이지 애플리케이션 SPA에 대해 먼저 알아야한다.

### SPA(Single Page Application)

#### 전통적인 Page LifeCycle

1. Client에서 Server로 최초의 요청을 보낸다.
2. Server는 응답을 보내고 Client에서 화면이 보인다.
3. Client에서 상화작용을 하기위한 요청을 Server에 보낸다.
4. Server는 이에 응답
5. 페이지가 Reload 된다.

위와 같은 방법의 경우 사용자가 새로운 요청을 보내고 응답을 받을 때 마다 사용자의 페이지가 Reload되기 때문에 비용적인 측면에서 손해를 볼 수 밖에 없다.<br/>
해결법으로는 SPA가 있다.

SPA는 필요한 정적 리소스를 최초에 한번 다운로드 한다.
이후 변경이 있을 때 페이지 전체를 Reload하지 않고 변경된 부분만 갱신한다.

## CSR

![](https://velog.velcdn.com/images/skypedanny/post/a15eb718-1532-474c-a3d3-e8a493c784f6/image.png)

React를 사용한 CSR의 동작 순서는 다음과 같다.

1. 서버에서 브라우저로 응답을 보낸다.
2. 브라우저에서 JS를 다운로드 받는다.
3. 브라우저가 React를 실행한다.
4. 페이지가 보이고 상호작용 할 수 있다.

CSR의 장점

- 컴포넌트 단위로 UI를 구성하기 때문에 재사용에 용이하고 중복을 줄일 수 있다.
- 사용자가 페이지를 전환할 때 부드럽다.
- 변경된 사항만 Server에 요청을 보내면 되기 때문에 비용적인 측면에서 효율적이다.

CSR의 단점

- 초기 페이지 로딩이 오래걸린다.
- SEO가 어렵다.
