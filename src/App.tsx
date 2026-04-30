import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryDetails from './pages/CategoryDetails';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// Cần làm responsive 