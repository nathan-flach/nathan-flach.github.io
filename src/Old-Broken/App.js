import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*
Notes TODO
- CLEANUP
- White text on black over header photo: Hi, I'm Nathan.
- Smaller header image, white nav with black text, scroll down to about and nav turns black
- Fix nav bar: left side HOME/NATHAN FLACH, (about?), PROJECTS, RESUME; right side EMAIL, LINKEDIN, TWITTER
- Photo courtesy of Google Streetview
- Footer: C 2022 - Nathan Flach
- Inspo: cargo.site, dellsystem, Marc Tessyier, Bratton, dunne/raby, 

*/

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>  */}
        </Routes>
        <Footer />
      </Router>
    </div>
    /* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> */
  );
}

export default App;
