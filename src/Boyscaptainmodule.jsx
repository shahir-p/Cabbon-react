import React from 'react'
import { Routes, Route } from 'react-router-dom';
import BcAppbar from './boysCaptain/BcAppbar';
import BcBotttom from './boysCaptain/BcBottom';
import BcHome from './boysCaptain/BcHome';
import BcBoys from './boysCaptain/BcBoys';
import BcPayment from './boysCaptain/BcPayment';

const Boyscaptainmodule = ({ height, width }) => {
  return (
    <>
      {/* Appbar and Bottom Navigation */}
      <BcAppbar height={height} width={width} />
      <BcBotttom height={height} width={width} />

       {/* Define Routes */}
       <Routes>
                {/* The parent route */}
                <Route path="/" element={<BcHome height={height} width={width} />} />
                
                {/* Nested routes */}
                <Route path="boys" element={<BcBoys height={height} width={width} />} />
                <Route path="payment" element={<BcPayment height={height} width={width} />} />
            </Routes>
    </>
  )
}

export default Boyscaptainmodule