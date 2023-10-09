import "./App.css";
import { useState } from "react";
// const [firstCity] = ["Tokyo", "San Siro", "Munich"];
function App() {
  const [emotion, setEmotion] = useState("happy"); // Array destructuring

  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button
        onClick={() => {
          setEmotion("sad");
        }}
      >
        Sad
      </button>
      <button
        onClick={() => {
          setEmotion("excited");
        }}
      >
        excited
      </button>
      <button
        onClick={() => {
          setEmotion("joyous");
        }}
      >
        joyous
      </button>
    </div>
  );
}

export default App;
