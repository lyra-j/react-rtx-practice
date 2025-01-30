import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState([]); // 전체 투두 목록 관리
  const [inputTodo, setInputTodo] = useState(""); // 투두 작성 input

  const inputRef = useRef(); //

  // 로컬스토리지에서 할 일 목록 불러오기, 첫 렌더링시에만
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("로컬스토리지 데이터 불러오기 오류!!", error);
        setTodos([]); // 오류시 빈 배열
      }
    }
  }, []);

  // 로컬스토리지에 할 일 목록 저장, todos에 변동이 생길 때 마다
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //  할 일 추가 로직
  const handleAddTodo = (e) => {
    e.preventDefault(); // 새로고침 방지

    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      completed: false,
    };

    // 아무값도 입력되지 않았다면 추가 x
    if (inputTodo.trim() === "") {
      alert(`할 일을 입력해주세요~`);
      return;
    }

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputTodo("");
    // alert(`새로운 할 일이 추가되었습니다.`);
    inputRef.current.focus();
  };

  // 할 일 완료 여부 토글 로직
  const handleToggleCompleted = (id) => {
    const toggleCompleted = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    setTodos(toggleCompleted);
  };

  // 할 일 삭제 로직
  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(deleteTodo);
    // alert(`할 일이 삭제되었습니다.`);
  };

  return (
    <MainContainer>
      <Header>rtk Todo List</Header>
      {/* 할 일 form */}
      <FormContainer onSubmit={handleAddTodo}>
        <Input
          ref={inputRef}
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="새로운 할 일을 입력하세요."
        />
        <Button type="submit">+ add</Button>
      </FormContainer>

      {/* 할 일 목록 , 여러줄을 return시 ()묶는것 잊지말자!!*/}
      <TodoList>
        {!todos.length ? (
          <p>아직 할 일이 등록되지 않았습니다.</p>
        ) : (
          todos.map((todo) => {
            return (
              <TodoItem key={todo.id}>
                <CheckBox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo.id)}
                />
                <TodoText>{todo.text}</TodoText>
                <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                  - del
                </DeleteButton>
              </TodoItem>
            );
          })
        )}
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

const FormContainer = styled.form`
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
  background-color: ${({ completed }) => (completed ? "#dde7dd" : "white")};
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.input`
  margin-right: 15px;
`;

const TodoText = styled.span`
  font-size: 16px;
  color: #333;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
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
