import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${color},${title}`);
    setTitle("");
    setColor("#000000");
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          type="text"
          value={title}
          placeholder="Enter a color title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          value={color}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />{" "}
        <br />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
