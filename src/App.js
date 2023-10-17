import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Support from './components/pages/Support';
import Footer from './components/Footer';
import Citizen_section from './components/pages/Citizen_section';
import SignUp from './components/pages/Sign-Up';
import New_case from './components/pages/New_case';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/cases' element={<Citizen_section />} />
        <Route path='/new-case' element={<New_case />} />
        <Route path='/staff-section' />
        <Route path='/legal-database' />
        <Route path='/support' element={<Support />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
