
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Culinaria from './pages/Culinaria';
import FestasPopulares from './pages/FestasPopulares';
import Artesanato from './pages/Artesanato';
import PontosTuristicos from './pages/PontosTuristicos';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/culinaria" element={<Culinaria />} />
            <Route path="/festas" element={<FestasPopulares />} />
            <Route path="/artesanato" element={<Artesanato />} />
            <Route path="/turismo" element={<PontosTuristicos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;