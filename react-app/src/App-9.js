import "./App.css";
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${colorProps.value},${titleProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="Enter a color title" />
        <br />
        <input {...colorProps} type="color" /> <br />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
