import React, { useState } from "react";

const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  // taking inputs from the user
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // submit the input value

  const handleSubmit = () => {
    // one object to create the tode

    const newTodo = {
      title: inputValue,
      status: false,
      id: Date.now() + Math.random(10) + inputValue,
    };

    const todoAfterNewTodoAdded = [...todos, newTodo];
    setTodos(todoAfterNewTodoAdded);
  };
  return (
    <div>
      <h1>Todo Input</h1>
      <input type="text" placeholder="Enter Todos" onChange={handleInput} />
      <button onClick={handleSubmit}>Add Todos</button>
      <h2>Todo Listing</h2>
      {todos?.map((todo) => (
        <p key={todo.id}>
          {todo.title} - {todo.status ? "Completed" : "Not Completed"}
        </p>
      ))}
    </div>
  );
};

export default Todos;
