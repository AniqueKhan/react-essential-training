import "./App.css";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h1>hi</h1>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <label htmlFor="#checkbox">{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
