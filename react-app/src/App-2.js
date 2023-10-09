import "./App.css";
const [firstCity] = ["Tokyo", "San Siro", "Munich"];
function App({ name }) {
  return (
    <div className="App">
      <h1>Hello from {name}</h1>
      <h3>The first city is {firstCity}</h3>
    </div>
  );
}

export default App;
