import React from 'react'
import { useState, useEffect } from 'react';
 


const HomePage = () => {
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
            <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, }}>
                <div className='today ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: `${height * 0.1 + 10}px`, borderRadius: "10px", border: "1px solid", padding: "10px" ,}}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "600" }}>TODAY</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}>08:30 am</span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'><span style={{ fontSize: "20px", fontWeight: "600" }}>Qatar auditoruim</span></div>
                </div>
                <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>Overview</span>
                <div className='service ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px"  }}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "600" }}>Service</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'><span style={{ fontSize: "20px", fontWeight: "600" }}>25</span></div>
                </div>
                <div className='Payment ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px" }}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "600" }}>Earnings</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'><span style={{ fontSize: "20px", fontWeight: "600" }}>2500</span></div>
                </div>
            </div>
        </>

    )
}

export default HomePage