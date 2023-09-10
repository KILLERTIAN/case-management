import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Support from './components/pages/Support';
import Footer from './components/Footer';
import Citizen_section from './components/pages/Citizen_section';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/citizen-section' element={<Citizen_section />} />
        <Route path='/staff-section' />
        <Route path='/legal-database' />
        <Route path='/support' element={<Support />} />
        <Route path='/sign-up' />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
