  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
import BcAppbar from './BoysCaptain/BcAppbar';
import BcBotttom from './boysCaptain/BcBottom';
import BcHome from './boysCaptain/BcHome';
import BcEvents from './boysCaptain/BcEvents';
import BcBoys from './boysCaptain/BcBoys';
import BcPayment from './boysCaptain/BcPayment';
import BcPay from './boysCaptain/BcPay';
import BcEventBoys from './boysCaptain/BcTodayList';
import BcEventDetails from './boysCaptain/BcEventDetails';
import BcFine from './boysCaptain/BcFine';
import BcPaymentDetails from './boysCaptain/BcPaymentDetails';


  const Boyscaptainmodule = ({ height, width }) => {


    return (
      <>
        {/* Appbar */}
        <BcAppbar height={height} width={width} />

        {/* Conditionally render BcBotttom */}
        <BcBotttom height={height} width={width} />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<BcHome height={height} width={width} />} />
          <Route path="events" element={<BcEvents height={height} width={width} />} />       
          <Route path="boys" element={<BcBoys height={height} width={width} />} />
          <Route path="payment" element={<BcPayment height={height} width={width} />} />
          <Route path="pay" element={<BcPay height={height} width={width} />} />
          <Route path="eventboys" element={<BcEventBoys height={height} width={width} />} />
          <Route path="eventdetails" element={<BcEventDetails height={height} width={width} />} />
          <Route path="eventfine" element={<BcFine height={height} width={width} />} />
          <Route path="paymentdetails" element={<BcPaymentDetails height={height} width={width} />} />


        </Routes>
      </>
    );
  };

  export default Boyscaptainmodule;
