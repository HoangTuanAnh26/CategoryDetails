import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryDetails from './views/CategoryDetails/CategoryDetails';
import Home from './views/Home/Home';



const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


