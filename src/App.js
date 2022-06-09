import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["go to gym", "take meal"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
    return;
  };

  return (
    <div>
      <h1>Hello world!</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add TODO</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
