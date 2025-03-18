import React from 'react';
import { isMobile } from 'react-device-detect';

const App = () => {
  if (!isMobile) {
    return <h1>This app is only available on mobile devices.</h1>;
  }

  return (
    <div>
      <h1>Welcome to the Mobile App</h1>
    </div>
  );
};

export default App;
