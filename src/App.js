
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/contact" element={ <Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
