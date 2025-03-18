import React from 'react'
import { useState, useEffect } from 'react';

const ServicePage = () => {
     const [height, setHeight] = useState(window.innerHeight);
        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
            const mediaQuery = window.matchMedia(`(max-width: ${window.innerWidth}px)`);
    
            const updateDimensions = () => {
                setHeight(window.innerHeight);
                setWidth(window.innerWidth);
            };
    
            // Add event listener for media query changes
            mediaQuery.addEventListener('change', updateDimensions);
    
            // Update the dimensions initially
            updateDimensions();
    
            // Cleanup the event listener
            return () => mediaQuery.removeEventListener('change', updateDimensions);
        }, []);
  return (
    <div>ServicePage</div>
  )
}

export default ServicePage