import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import PageOne from "./components/PageOne";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <PageOne />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
