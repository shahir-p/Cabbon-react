import React from 'react'
import { useState, useEffect } from 'react';

const Appbar = () => {
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
    <>
    <div className='appbar d-flex justify-content-between align-items-center' style={{height:`${height*0.1}px`,width:`${width}px`,boxShadow:"0px 0px 5px black"}}>
    <span className='title' style={{paddingLeft:"20px",fontSize:"20px",fontWeight:"500"}}>Home</span>
    <div className='appbarIcons d-flex column-gap-3 me-3'>
    <div className="icons" style={{width:`30px`,height:`30px`,}}>
    <i class="fa-solid fa-qrcode" style={{fontSize:"25px"}}></i>
    </div>
    <div className="icons" style={{width:`30px`,height:`30px`,}}>
    <i class="fa-regular fa-user" style={{fontSize:"25px"}}></i>
    </div>
   
    </div>
    </div>
    </>
  )
}

export default Appbar