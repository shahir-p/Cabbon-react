import React from 'react'


const ServicePage = ({ height, width }) => {

  return (
    <div className='home d-flex flex-column ' style={{ width: `${width}px`, marginTop: `${height * 0.1 + 10}px`, padding: "5px" }}>
      <h5>Services</h5>
      <div className='list d-flex justify-content-evenly align-items-center mb-2' style={{ height: `${height * 0.07}px`, width: `${width - 10}px`, border: "1px solid", borderRadius: "10px",fontSize:"13px" }}>
        <span>1.</span>
        <span>10-02-25</span>
        <span>Qatar Auditoruim</span>
        <span style={{color: "rgba(50, 168, 82)",}}>08:30 am</span>
        <span style={{color: "rgba(191, 48, 48)",}}>04:30 pm</span>
        <span><i class="fa-solid fa-triangle-exclamation text-warning" ></i></span>
      </div>
     
    </div>
  )
}

export default ServicePage