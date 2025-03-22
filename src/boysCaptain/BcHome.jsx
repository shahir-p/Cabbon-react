
import React from 'react'
import { useState, useEffect } from 'react';
import boysbg from '../assets/boysbg.png'
import paymentbg from '../assets/paymentbg.png'
import todaybg from '../assets/today bg.png'


const BcHome = ({ height, width }) => {
  return (
    <>

      <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, paddingLeft: "10px", paddingRight: "10px" }}>
        <div style={{ marginTop: `${height * 0.1 + 15}px`, }}>
          {/* <img src={profile} alt="" width={"50px"} height={"0px"} /> */}
          <span style={{ paddingLeft: "10px", fontSize: "18px" }}>Welcome Shahir ,</span>

        </div>
        <div className='today ' style={{
          height: `${height * 0.18}px`, margin: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", 
        }}>
          <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "500" }}>TODAY</span>
            <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "400" }}>10-02-2025</span>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-4'><span style={{ fontSize: "20px", fontWeight: "500" }}>Live Events</span>
          <div className='bg-dark' style={{ fontSize: "18px", fontWeight: "500" ,marginLeft:"5px",padding:"5px",color:"white",borderRadius:"10px"}}>10</div></div>
        </div>
        <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>Overview</span>
        <div className='service ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(${boysbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
          <div className=''> <span style={{ fontSize: "18px", fontWeight: "500" }}>Boys</span>
            <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
          </div>
          <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>25</span></div>
        </div>

        <div className='Payment ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(${paymentbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
          <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "500" }}>Earnings</span>
            <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
          </div>
          <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>2500</span></div>
        </div>

      </div>

    </>
  )
}

export default BcHome