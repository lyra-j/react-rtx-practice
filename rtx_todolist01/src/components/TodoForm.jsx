import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const TodoForm = () => {
  const [inputTodo, setInputTodo] = useState(""); // 투두 작성 input
  const dispatch = useDispatch();
  const inputRef = useRef(); //

  //*  할 일 추가 로직
  const handleAddTodo = (e) => {
    e.preventDefault(); // 새로고침 방지

    // 아무값도 입력되지 않았다면 추가 x
    if (inputTodo.trim() === "") {
      alert(`할 일을 입력해주세요~`);
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        text: inputTodo,
        completed: false,
      })
    );

    setInputTodo("");
    // alert(`새로운 할 일이 추가되었습니다.`);
    inputRef.current.focus();
  };

  return (
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
  );
};

export default TodoForm;

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
