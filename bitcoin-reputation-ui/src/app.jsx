import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Reputation from './pages/Reputation';
import AuditLog from './pages/AuditLog';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/reputation" element={<Reputation />} />
        <Route path="/audit-log" element={<AuditLog />} />
      </Routes>
    </Router>
  );
};

export default App;
