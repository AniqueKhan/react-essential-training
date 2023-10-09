import "./App.css";
import { useState, useEffect } from "react";
// const [firstCity] = ["Tokyo", "San Siro", "Munich"];
function App() {
  const [emotion, setEmotion] = useState("happy"); // Array destructuring
  const [secondaryEmotion, setSecondaryEmotion] = useState("tired"); // Array destructuring
  useEffect(() => {
    console.log(`The current emotion is ${emotion}`);
  }, [emotion]);
  useEffect(() => {
    console.log(`The current emotion is ${secondaryEmotion}`);
  }, [secondaryEmotion]);

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

      <br />
      <h1>Current Secondary Emotion is {secondaryEmotion}</h1>
      <button
        onClick={() => {
          setSecondaryEmotion("relaxed");
        }}
      >
        relaxed
      </button>
    </div>
  );
}

export default App;
