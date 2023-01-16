# Server API

Server API는 적절한 요청을 하였을 때, 그에 맞는 응답을 되돌려주는 창구(Endpoint)를 Web을 통해 노출한 것을 말한다. <br/>

이 Server API를 만드는 방법론 중 하나로 REST 라는 것이 있으며, 이 방법은 많은 Server API들을 구성하기 위해 사용되어왔고, 현재도 많이 사용되고 있다.

## REST 와 RESTful

#### REST

모든 Resourse들을 하나의 Endpoint에 연결해놓고, 각 Endpoint는 그 Resource와 관련된 내용만 관리하게 하자는 방법론이다.

예로들어 어떤 API를 사용하여 사용자들이 글을 작성/수정/삭제를 할 수 있고, 각 글에 댓글을 작성/수정/삭제할 수 있다고 해보자

이때, API의 Endpoint를 다음과 같이 구성하면 REST의 조건을 만족하게 된다.

1. 글 관련 API = /posts
   - 글 작성 = POST /posts
   - 글 수정 = PATCH /posts/[postid]
   - 글 삭제 = DELETE /posts/[postid]
2. 댓글 관련 API = /posts/[postid]/comments
   - 댓글 작성 = POST /posts/[postid]/comments
   - 댓글 수정 = PATCH /posts/[postid]/comments/[commentid]
   - 댓글 삭제 = DELETE /posts/[postid]/comments/[commentid]

이런 REST의 조건을 만족하는 API를 RESTful API라고 부르고, 이런 방식으로 API를 작성하는것을 RESTful 하다고 한다.

## GraphQL

GraphQL은 Graph Query Language의 줄임말이다.
Query Language란 정보를 얻기 위해 보내는 질의문(Query)을 만들기 위해 사용되는 Computer 언어의 일종이다.<br/>
GraphQL은 이런 Query Language 중에서도 Server API를 통해 정보를 주고받기 위해 사용하는 Query Language이다.
<br/>

GraphQL은 Facebook에서 다음과 같은 이유로 만들어졌다.<br/>

- RESTful API로는 다양한 기종에서 필요한 정보들을 일일히 구현하는 것이 힘들었다.
- 예로, iOS와 Android에서 필요한 정보들이 조금씩 달랐고, 그 다른 부분마다 API를 구현하는것이 힘들었다.

이 때문에 정보를 사용하는 측에서 원하는 대로 정보를 가져올 수 있고, 보다 편하게 정보를 수정할 수 있도록 하는 표준화된 Query Language를 만들게 되었다.

### GraphQL

GraphQL 장점

1. HTTP 요청의 횟수를 줄일 수 있다.
   - RESTful은 각 Resource 종류 별로 요청을 해야하고, 따라서 요청 횟수가 필요한 Resource의 종류에 비례한다.<br/>
     반면 GraphQL은 원하는 정보를 하나의 Query에 모두 담아 요청하는 것이 가능하다.
2. HTTP 응답의 Size를 줄일 수 있다.
   - RESTful은 응답의 형태가 정해져있고, 따라서 필요한 정보만 부분적으로 요청하는 것이 힘들다.<br/>
     반면 GraphQL은 원하는 대로 정보를 요청하는 것이 가능하다.

GraphQL 단점

1. File 전송 등 Text만으로 하기 힘든 내용들을 처리하기 복잡하다.
   - GraphQL에서 File 전송을 할 수 없는 것은 아니나, 일반적인 GraphQL API에 비해서 복잡해지거나 외부의 Service에 의존해야하는 등 문제가 발생한다.
2. 고정된 요청과 응답만 필요할 경우에는 Query로 인해 요청의 크기가 RESTful API의 경우보다 더 커진다.
3. 재귀적인 Query가 불가능하다. (결과에 따라 응답의 깊이가 얼마든지 깊어질 수 있는 API를 만들 수 없다.)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
참조 (https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/)
