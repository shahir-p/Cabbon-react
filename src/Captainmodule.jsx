import React from 'react'

import { Routes, Route } from 'react-router-dom';




import CpBottom from './Captian/CpBottom';
import CaptianService from './Captian/CaptianService';
import CaptainPayment from './Captian/CaptainPayment';
import CreateEvent from './Captian/CreateEvent';
import CpAppbar from './Captian/CpAppbar';


const Captainmodule = ({ height, width }) => {
  return (
    <>
      {/* Appbar and Bottom Navigation */}
      <CpAppbar height={height} width={width} />
     <CpBottom height={height} width={width}/>

      {/* Define Routes */}
      <Routes>
        {/* The parent route */}
        <Route path="/" element={<CreateEvent height={height} width={width} />} />

        {/* Nested routes */}
        <Route path="service" element={<CaptianService height={height} width={width} />} />
        <Route path="payment" element={<CaptainPayment height={height} width={width} />} />
      </Routes>
    
      
      
    </>
  )
}

export default Captainmodule