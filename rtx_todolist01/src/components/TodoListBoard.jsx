import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, toggleTodo } from "../redux/modules/todos";

const TodoListBoard = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleCompleted = (id) => {
    dispatch(toggleTodo({ id }));
  };

  // 할 일 삭제 로직
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  /* 여러줄을 return시 ()묶는것 잊지말자!!*/
  return (
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
  );
};

export default TodoListBoard;

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
