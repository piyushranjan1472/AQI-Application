import "./App.scss";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <h1 className="title">Air Quality Index</h1>
      <div className="home">
        <Home />
      </div>
    </div>
  );
}

export default App;
