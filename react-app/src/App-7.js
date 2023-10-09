import "./App.css";
import { useRef } from "react";

function App() {
  const textTitle = useRef();
  const colorTitle = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = colorTitle.current.value;
    alert(`${color},${title}`);
    textTitle.current.value = "";
    colorTitle.current.value = "";
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input ref={textTitle} type="text" placeholder="Enter a color title" />
        <br />
        <input ref={colorTitle} type="color" /> <br />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
