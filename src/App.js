import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/shop" Component={Shop} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>;
};

export default App;
