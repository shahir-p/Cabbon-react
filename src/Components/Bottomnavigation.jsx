import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = ({ height, width }) => {
  const [activeTab, setActiveTab] = useState('home'); // Track active tab
  const navigate = useNavigate();

  const tabs = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-house', route: '/' },
    { id: 'service', label: 'Service', icon: 'fa-solid fa-bell-concierge', route: '/service' },
    { id: 'payment', label: 'Payment', icon: 'fa-solid fa-credit-card', route: '/payment' },
  ];

  const handleTabClick = (tabId, route) => {
    setActiveTab(tabId); // Update active tab
    navigate(route); // Navigate to the corresponding route
  };

  return (
    <div
      className="bottombarIcons d-flex justify-content-evenly align-items-center bg-white"
      style={{
        width: `${width}px`,
        height: `${height * 0.08}px`,
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 5px black',
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="icons d-flex flex-column justify-content-center align-items-center"
          style={{
            width: `30px`,
            height: `50px`,
            color: activeTab === tab.id ? 'black' : 'grey',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick(tab.id, tab.route)}
        >
          <i className={tab.icon} style={{ fontSize: '25px' }}></i>
          <span style={{ fontSize: '12px' }}>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
