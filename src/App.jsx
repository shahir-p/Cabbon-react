import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Appbar from './Components/Appbar';
import ServicePage from './Pages/ServicePage';
import PaymentPage from './Pages/PaymentPage';
import BottomNavigation from './Components/Bottomnavigation';
import Login from './Pages/Login';

const AppLayout = ({ height, width, children }) => {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {/* Conditionally render Appbar */}
      {!isLoginPage && <Appbar height={height} width={width} />}

      {children}

      {/* Conditionally render BottomNavigation */}
      {!isLoginPage && <BottomNavigation height={height} width={width} />}
    </div>
  );
};

const App = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateDimensions = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Redirect for non-mobile devices
  if (!isMobile) {
    return <h1>This app is only available on mobile devices.</h1>;
  }

  return (
    <Router>
      <AppLayout height={height} width={width}>
        <Routes>
          <Route path="/" element={<Login height={height} width={width} />} />
          <Route path="/home" element={<HomePage height={height} width={width} />} />
          <Route path="/service" element={<ServicePage height={height} width={width} />} />
          <Route path="/payment" element={<PaymentPage height={height} width={width} />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
