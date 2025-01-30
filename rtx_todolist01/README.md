# React RTK TodoList

1. yarn + React + Vite 프로젝트 생성
2. yarn add styled-components<br />
   2-1.스타일드컴포넌트에서 자동완성이 되지 않는경우 1.7.5 버전으로 다운그레이드
3. App.jsx<br />
   3-1. 기본적인 todolist 구현 & 스타일드 컴포넌트 적용
4. yarn add redux react-redux<br />
   4-1. src/redux/config, modules<br />
   4-2. config/configStore.js(중앙 state 관리소)<br />
   4-3. main.jsx 에 Provide, store 추가<br />
   4-4. modules/todos.js (state들이 모여 있는 모듈)<br />
   4-5. App.jsx 에 useSelector로 store 연결
