import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*
Notes TODO
- CLEANUP
- Header and footer inline not stacked
- White text on black over header photo
- Header: left side HOME/NATHAN FLACH, (about?), PROJECTS, RESUME

- CLEANUP
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;