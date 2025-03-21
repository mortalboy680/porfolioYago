import './App.css';
import './style/normalize.css';
import 'boxicons';
import Nav from './componentes/layout/Nav.js';
import Home from './componentes/pages/Home.js';
import Experience from './componentes/pages/Experience.js';
import Proyect from './componentes/pages/Proyect.js';
import Footer from './componentes/layout/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='divBody manrope'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/proyect" element={<Proyect />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;