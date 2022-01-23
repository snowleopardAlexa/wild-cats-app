import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Types from './components/Types/Types';
import RandomCat from './components/RandomCat/RandomCat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="types/*" element={<Types />} />
        <Route path="random/*" element={<RandomCat />} />
      </Routes>
       <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
