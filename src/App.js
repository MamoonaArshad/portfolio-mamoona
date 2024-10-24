
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import {Routes, Route} from 'react-router-dom'
import AboutMe from './components/About/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<About />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>


     

    </div>
  );
}

export default App;
