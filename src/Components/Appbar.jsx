import React from 'react'
import { useState, useEffect } from 'react';
import logo from "../assets/cabbon-logo.png"; // Import the image

const Appbar = ({ height, width }) => {

    return (
        <>
            <div
                className="appbar d-flex justify-content-between align-items-center"
                style={{
                    height: `${height * 0.1}px`,
                    width: `${width}px`,
                    boxShadow: "0px 0px 5px black",
                }}
            >
                <div className='d-flex justify-content-between align-items-center'> 
                    <img
                        src={logo} // Use the imported image here
                        alt=""
                        style={{ height: "50px",paddingLeft: "10px" }} // Add height or width for proper scaling
                    />
                    <span
                        className="title"
                        style={{ paddingLeft: "0px", fontSize: "20px", fontWeight: "500" }}
                    >
                        Cabbon
                    </span>
                </div>
                <div className="appbarIcons d-flex column-gap-3 me-3">
                    <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                    >
                        <i className="fa-solid fa-qrcode" style={{ fontSize: "25px" }}></i>
                    </div>
                    <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                    >
                        <i className="fa-regular fa-user" style={{ fontSize: "25px" }}></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Appbar