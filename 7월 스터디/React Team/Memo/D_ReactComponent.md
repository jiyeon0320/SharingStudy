## 03. 리액트 컴포넌트

- JSX : JavaScript XML 자바스크립트에 XML을 추가한 확장형 문법
- 폴더 최상단에 있는(root) index.js는 yarn start 명령어로 리액트 서버를 구동했을 때 최초로 실행됨.

* component

  - 기존의 HTML 마크업과 구분하기 위해 컴포넌트 이름의 첫 번째 글자는 대문자로 지정한다.
  - 구성 요소
    - property : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
    - state : 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
    - context : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터

* property
  - 속성(attribute) 형태로 전달되는 값
    ex) MyComponent 안에 name 속성이 있고 'message'라는 속성값이 있는데 이 속성값이 프로퍼티!
    ```
    <MyComponent name="message" />
    ```

## 04. 컴포넌트 생명주기

    : 컴포넌트의 생성부터 소멸까지의 과정. Lifecycle

    - constructor(props) 함수
        - 맨 처음에 생성될 때 한 번만 호출됨
        - 상태(state, 객체 변수)를 선언할 때 사용
        - 항상 super() 함수를 가장 위에 호출해야 한다!!

    - render() 함수
        - 데이터가 변경되어 새 화면을 그려야 할 때 자동 호출
        - render() 함수가 반환하는 JSX를 화면에 그려줌

    - static getDrivedStateFromProps(props, state) 함수
        - 정적 함수 >> this.props나 this.state 방법으로 프로퍼티나 스테이트 값에 접근할 수 없음
        - 상위 컴포넌트에서 전달받은 프로퍼티로 state 값을 연동할 때 주로 사용. 반환값으로 state를 변경
