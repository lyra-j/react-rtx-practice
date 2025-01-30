import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoListBoard from "./components/TodoListBoard";

function App() {
  const { todos } = useSelector((state) => state.todos);
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("todos"));
  // }, []);

  // 로컬스토리지에서 할 일 목록 불러오기, 첫 렌더링시에만
  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     try {
  //       [JSON.parse(savedTodos)];
  //     } catch (error) {
  //       console.error("로컬스토리지 데이터 불러오기 오류!!", error);
  //       []; // 오류시 빈 배열
  //     }
  //   }
  // }, []);

  // 로컬스토리지에 할 일 목록 저장, todos에 변동이 생길 때 마다
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <MainContainer>
      <Header>rtk Todo List</Header>
      <TodoForm />
      <TodoListBoard />
    </MainContainer>
  );
}

export default App;

// styled-components
const MainContainer = styled.div`
  max-width: 600px;
  background-color: #f4f4f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
`;

const Header = styled.h1`
  text-align: center;
  color: #333333;
`;
