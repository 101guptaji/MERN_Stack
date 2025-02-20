import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <nav>
          <NavLink to='/' activeClassName="active">Home</NavLink>
          <NavLink to="/about-us" activeClassName="active">About</NavLink>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          <NavLink to="/contact-us" activeClassName="active">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
