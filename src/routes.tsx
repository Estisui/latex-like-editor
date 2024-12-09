import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Login from './pages/Login';
import Works from './pages/Works';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
