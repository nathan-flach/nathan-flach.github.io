import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';

/*
Notes TODO
- White text on black over header photo: Hi, I'm Nathan.
- Fix nav bar: left side HOME/NATHAN FLACH, (about?), PROJECTS, RESUME; right side EMAIL, LINKEDIN, TWITTER
- Photo courtesy of Google Streetview
- Footer: C 2022 - Nathan Flach
- Inspo: cargo.site, dellsystem, Marc Tessyier, Bratton, dunne/raby, 

*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
