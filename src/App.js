import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import CoachingPage from './components/CoachingPage';
import SummerCampPage from './components/SummerCampPage';
import ComingSoonProvider from './components/ComingSoonPopup';

function App() {
  return (
    <ComingSoonProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/summer-camp" element={<SummerCampPage />} />
          </Routes>
        </div>
      </Router>
    </ComingSoonProvider>
  );
}

export default App;