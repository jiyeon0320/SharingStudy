1. yarn create react-app project-name

   - 리액트 프로젝트 생성됨

2. 필요한 npm들을 package.json에 다 적어두기

   > yarn
   > 전체 설치됨

   - warn 은 버전이 달라서 뜨는 것. 무시해도 됨
   - 버전 업그레이드를 하고 싶으면
     > yarn upgrade

3. babel-loader 호환성 오류 해결
   - create-react-app과 버전이 충돌할 수 있음
   - root 폴더(프로젝트 최상단 폴더)에 파일 이름 .env(마침표 포함) 생성
     > SKIP_PREFLIGHT_CHECK = true
     > 저장
