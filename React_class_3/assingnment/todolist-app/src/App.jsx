import React from "react";

function App() {
  const [inputVal, setInputVal] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const addTask = () => {
    const newTask = {
      id: Math.random(),
      title: inputVal,
      status: false,
    };
    const updatedTaskList = [...taskList, inputVal];
    setTaskList(updatedTaskList);
  };
  return (
    <>
      <div className="add-task">
        <input
          placeholder="Add Task"
          onChange={handleChange}
          value={inputVal}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="task-list">
        {taskList.map((taskItem) => (
        <div
        key = {taskItem.id}
          className="task-item"
          style={{
            border: "1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <p>{taskItem.title}</p>
          <p>{taskItem.status ? "Completed" : "Not Completed"}</p>
          <button>DELETE</button>
        </div>
        ))}
      </div>
    </>
  );
}

export default App;
