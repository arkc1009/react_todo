import React, { useState, useRef } from "react";
import styled from "styled-components";
import CreateTodo from "./Component/CreateTodo";
import TodoList from "./Component/TodoList";

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    box-shadow: 1px 1px 10px 1px grey;
  `;

function App() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "기상",
      content: "아침9시에 일어나기",
      checked: false,
    },
    {
      id: 2,
      title: "리액트 공부",
      content: "리액트로 TODO 만들기",
      checked: false,
    },
  ]);

  const nextId = useRef(3);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      title,
      content,
    };
    console.log(todo);
    console.log(title, content);
    setTodos([...todos, todo]);

    setInputs({
      title: "",
      content: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <CreateTodo
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <TodoList todos={todos} onRemove={onRemove} />
    </Container>
  );
}

export default App;
