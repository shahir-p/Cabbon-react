import React from 'react'
import { useState, useEffect } from 'react';
import servicebg from '../assets/service bg.png'
import paymentbg from '../assets/paymentbg.png'
import todaybg from '../assets/today bg.png'



const HomePage = ({ height, width }) => {
  
    return (
        <>
            <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, }}>
                <div className='today ' style={{
                    height: `${height * 0.2}px`, margin: "10px", marginTop: `${height * 0.1 + 10}px`, borderRadius: "10px", border: "1px solid", padding: "10px",backgroundImage: `url(${todaybg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:"right"
                }}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "600" }}>TODAY</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}>08:30 am</span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'><span style={{ fontSize: "20px", fontWeight: "600" }}>Qatar auditoruim</span></div>
                </div>
                <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>Overview</span>
                <div className='service ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px" , backgroundImage: `url(${servicebg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:"right"}}>
                    <div className=''> <span style={{ fontSize: "18px", fontWeight: "600" }}>Service</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>25</span></div>
                </div>
                <div className='Payment ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px" ,backgroundImage: `url(${paymentbg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:"right"}}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "600" }}>Earnings</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>2500</span></div>
                </div>
            </div>
        </>

    )
}

export default HomePage