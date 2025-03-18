import React from 'react';
import { isMobile } from 'react-device-detect';
import HomePage from './Pages/HomePage';
import Appbar from './Components/Appbar';
import Bottomnavigation from './Components/Bottomnavigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicePage from './Pages/ServicePage';
import PaymentPage from './Pages/PaymentPage';

const App = () => {
  const isMobile=true
  if (!isMobile) {
    return <h1>This app is only available on mobile devices.</h1>;
  }

  return (
    <Router>
      <div>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Bottomnavigation />
      </div>
    </Router>
  );
};

export default App;
