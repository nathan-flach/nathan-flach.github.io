import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';

/*
Notes
- Need Home, About, Projects, Contact, Resume sections on nav
- Inspo: cargo.site, dellsystem, Marc Tessyier, Bratton, dunne/raby, 
- Hi! I'm Nathan. 

*/


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
