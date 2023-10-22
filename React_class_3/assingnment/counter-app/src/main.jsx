import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = React.useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1> Count : {count}</h1>
      <button onClick={handleClick}>Click Me $</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
