import React, { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  // 전체 투두 목록 관리
  const [todos, setTodos] = useState([]);
  // 투두 작성 input
  const [inputTodo, setInputTodo] = useState("");

  // 로컬스토리지에서 할 일 목록 불러오기, 첫 렌더링시에만
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // 로컬스토리지에 할 일 목록 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
    };

    // 아무값도 입력되지 않았다면 추가 x
    if (inputTodo.trim() === "") {
      alert(`할 일을 입력해주세요~`);
      return;
    }

    setTodos([...todos, newTodo]);
    setInputTodo("");
    alert(`새로운 할 일이 추가되었습니다.`);
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(deleteTodo);
    alert(`할 일이 삭제되었습니다.`);
  };

  return (
    <MainContainer>
      <Header>rtk Todo List</Header>
      {/* 할 일 form */}
      <InputContainer>
        <Input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="새로운 할 일을 입력하세요."
        />
        <Button onClick={handleAddTodo}>add+</Button>
      </InputContainer>

      {/* 할 일 목록 , 여러줄을 return시 ()묶는것 잊지말자!!*/}
      <TodoList>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id}>
              <TodoText>{todo.text}</TodoText>
              <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                del-
              </DeleteButton>
            </TodoItem>
          );
        })}
      </TodoList>
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

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  background-color: #3db793;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0c6349;
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

const TodoItem = styled.li`
  background-color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.span`
  font-size: 16px;
  color: #333;
`;

const DeleteButton = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  background-color: #e03f2dd2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;
