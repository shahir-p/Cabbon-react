  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import BcAppbar from './BoysCaptain/BcAppbar';
  import BcBotttom from './BoysCaptain/BcBottom';
  import BcHome from './BoysCaptain/BcHome';
  import BcBoys from './BoysCaptain/BcBoys';
  import BcPayment from './BoysCaptain/BcPayment';
  import BcPay from './BoysCaptain/BcPay';
import BcToday from './BoysCaptain/BcEvents';
import BcTodayList from './BoysCaptain/BcTodayList';
import BcEventBoys from './BoysCaptain/BcTodayList';
import BcEventDetails from './BoysCaptain/BcEventDetails';
import BcFine from './BoysCaptain/BcFine';
import BcEvents from './BoysCaptain/BcEvents';
import BcPaymentDetails from './BoysCaptain/BcPaymentDetails';


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
