import React from 'react'


const BcHome = ({ height, width }) => {
  return (
    <>

      <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`,marginTop: `${height * 0.1 + 15}px`, paddingLeft: "20px", paddingRight: "20px" }}>
      <span style={{ paddingLeft: "10px", fontSize: "18px" }}>Welcome Boy's Captain,</span>
      <div className='d-flex column-gap-2' style={{padding:"10px"}}>
        <div className='rounded border border-secondary' style={{backgroundColor:"", height:`${height*0.23}px`,width:`${width*0.5}px`,}}></div>
        <div className='rounded border border-secondary' style={{backgroundColor:"", height:`${height*0.23}px`,width:`${width*0.5}px`,}}></div>
      
       
        
      </div>

      </div>

    </>
  )
}

export default BcHome