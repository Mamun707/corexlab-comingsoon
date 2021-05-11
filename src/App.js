import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import Home from "./layout/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
