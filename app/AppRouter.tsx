// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MemberPage from './pages/Member';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<MemberPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

