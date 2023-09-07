import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Support from './components/pages/Support';

function App() {
  return (
    // <div><h1>hello</h1></div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/citizen-section' />
        <Route path='/staff-section' />
        <Route path='/legal-database' />
        <Route path='/support' element={<Support />} />
        <Route path='/sign-up' />
      </Routes>
    </Router>

  );
}

export default App;
