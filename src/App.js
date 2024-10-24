
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/about-me" element={<AboutPage/>} />
      </Routes>


     

    </div>
  );
}

export default App;
