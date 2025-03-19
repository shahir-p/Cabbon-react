import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ServicePage = ({ height, width }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='home d-flex flex-column ' style={{ width: `${width}px`, marginTop: `${height * 0.1 + 10}px`, padding: "5px" }}>
      <h5>Services</h5>
      <div className='list d-flex justify-content-evenly align-items-center mb-2' style={{ height: `${height * 0.07}px`, width: `${width - 10}px`, border: "1px solid", borderRadius: "10px", fontSize: "13px" }} onClick={handleShow}>
        <span>1.</span>
        <span>10-02-25</span>
        <span>Qatar Auditoruim</span>
        <span style={{ color: "rgba(50, 168, 82)", }}>08:30 am</span>
        <span style={{ color: "rgba(191, 48, 48)", }}>04:30 pm</span>
        <span><i class="fa-solid fa-triangle-exclamation text-warning" ></i></span>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Service Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>
         <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>Date </li>
              <li>Venue </li>
              <li>Entry </li>
              <li>Exit </li>
              <li>Fair </li>
              <li>Expense </li>
              <li>Others </li>
              <li>Fine </li>
              <li style={{fontSize:"18px",fontWeight:"600"}}>Total </li>
            </ul>
  
         </div>
         <div className='ms-2'>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>: 10-02-2025</li>
              <li>: Qatar Auditorium</li>
              <li style={{ color: "rgba(50, 168, 82)", }}>: 08:30 am</li>
              <li style={{ color: "rgba(191, 48, 48)", }}>: 04:30 pm</li>
              <li>: 480</li>
              <li>: 0</li>
              <li>: 0</li>
              <li>: <span>Reason</span> | <span>- 0</span></li>
              <li style={{fontSize:"18px",fontWeight:"600"}}>: 480</li>
            </ul>
  
         </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ServicePage