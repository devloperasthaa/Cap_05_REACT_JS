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

  //update the todo status
  const handleUpdateTodo = (id) => {
    console.log(id);
    const newTodoAfterUpdate = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodoAfterUpdate);
  };

  // delete the todo

  const handleDeleteTodo = (id) => {
    console.log(id)
  }
  return (
    <div>
      <h1>Todo Input</h1>
      <input type="text" placeholder="Enter Todos" onChange={handleInput} />
      <button onClick={handleSubmit}>Add Todos</button>
      <h2>Todo Listing</h2>
      {todos?.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid black",
            width: "50%",
            margin: "auto",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <p>
            {todo.title} - {todo.status ? "Completed" : "Not Completed"}
          </p>
          <button onClick={() => handleUpdateTodo(todo.id)}>Toggle Todo</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
};

// it will change the status  -> not completed false to completed true

// button --> get on id --> match the id with existing todo -> change the status
export default Todos;
