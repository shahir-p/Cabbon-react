
import React from 'react'
import logo from "../assets/cabbon-logo.png"; // Import the image
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BcAppbar = ({ height, width }) => {
    const [show, setShow] = useState(false);
    const [qrshow, setQRShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const qrhandleClose = () => setQRShow(false);
    const qrhandleShow = () => setQRShow(true);

    return (
        <>
            <div
                className="appbar d-flex justify-content-between align-items-center bg-white"
                style={{
                    height: `${height * 0.1}px`,
                    width: `${width}px`,
                    boxShadow: "0px 0px 5px black",
                    position: 'fixed',
                    top: 0,
                    zIndex: 1000
                }}
            >
                <div className='d-flex justify-content-between align-items-center'>
                    <img
                        src={logo} // Use the imported image here
                        alt=""
                        style={{ height: "50px", paddingLeft: "10px" }} // Add height or width for proper scaling
                    />
                    <span
                        className="title"
                        style={{ paddingLeft: "0px", fontSize: "20px", fontWeight: "500" }}
                    >
                        Cabbon
                    </span>
                </div>
                <div className="appbarIcons d-flex column-gap-3 me-3">
                    {/* <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                        onClick={qrhandleShow}
                    >
                        <i className="fa-solid fa-qrcode" style={{ fontSize: "25px" }}></i>
                    </div> */}
                    <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                        onClick={handleShow}
                    >
                        <i className="fa-regular fa-user" style={{ fontSize: "25px" }}></i>
                    </div>
                </div>
            </div>
           
            {/* for profile */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <div style={{height:"100px",width:"100px",backgroundColor:"green", borderRadius:"10px" ,border:"1px solid",backgroundImage: `url(https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_hybrid)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}>
                    
                    </div>
                    <div className='d-flex ms-5 mt-3' >
                       <div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 ,fontSize:"18px",fontWeight:"400"}}>
                                <li>Name </li>
                                <li>C/O</li>
                                <li>Mobile </li>
                                
                                <li>Place </li>
                            </ul>
                       </div>
                       <div className='ms-2'>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 ,fontSize:"18px",fontWeight:"400",}}>
                                <li>: <span>Shahir</span> </li>
                                <li>: <span>Fayis</span> </li>
                                <li>: <span>9526718126</span> </li>
                                
                                <li>: <span>Karathur</span> </li>
                               
                            </ul>
                       </div>

                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default BcAppbar