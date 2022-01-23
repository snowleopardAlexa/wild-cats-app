import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Types from './components/Types/Types';
import RandomCat from './components/RandomCat/RandomCat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/homepage" element={<HomePage />} />
       <Route path="/types" element={<Types />} />
       <Route path="/random" element={<RandomCat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
