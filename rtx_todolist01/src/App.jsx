import React, { useState } from "react";
import styled from "styled-components";

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
  color: #33333;
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

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <MainContainer>
      <Header>rtk Todo List</Header>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="새로운 할 일을 입력하세요."
        />
        <Button>add+</Button>
      </InputContainer>
    </MainContainer>
  );
}

export default App;
