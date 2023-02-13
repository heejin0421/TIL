## RESTful API란?
RESTful API라는 단어에서 사용되는 REST(REPresentational State Transfer)의 개념을 한줄로 정의하자면 아래와 같이 정의할 수 있다.

> HTTP 통신에서 어떤 자원에 대한 CRUD 요청을 Resource와 Method로 표현하여 특정한 형태로 전달하는 방식

즉, REST란 어떤 자원에 대해 CRUD(Create, Read, Update, Delete)연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것으로, GET,POST등의 방식(Method)을 사용하여 요청을 보내며, 요처을 위한 자원은 특정한 형태 (Representation of Resource)으로 표현된다. <br/>

이러한 REST 기반의 API를 웹으로 구현한 것이 RESTful API인데 예를 들어, 우리는 게시글을 작성하기 위해 http://loacalhost:8080/board라는 URI에 POST방식을 사용하여 JSON형태의 데이터를 전달할 수 있다.