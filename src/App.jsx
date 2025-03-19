import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import HomePage from './Pages/HomePage';
import Appbar from './Components/Appbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicePage from './Pages/ServicePage';
import PaymentPage from './Pages/PaymentPage';
import BottomNavigation from './Components/Bottomnavigation';

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
      <div>
        <Appbar height={height} width={width} />
        <Routes>
          <Route path="/" element={<HomePage height={height} width={width} />} />
          <Route path="/service" element={<ServicePage height={height} width={width} />} />
          <Route path="/payment" element={<PaymentPage height={height} width={width} />} />
        </Routes>
        <BottomNavigation height={height} width={width}/>
        {/* <BottomNavigation height={height} width={width} /> */}
      </div>
    </Router>
  );
};

export default App;
