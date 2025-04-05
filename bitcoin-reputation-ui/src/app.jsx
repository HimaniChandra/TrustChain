// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Reputation from './pages/Reputation';
import AuditLog from './pages/AuditLog';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="staking" element={<Staking />} />
          <Route path="reputation" element={<Reputation />} />
          <Route path="audit-log" element={<AuditLog />} />
        </Route>
      </Routes>
    </Router>
  );
}
