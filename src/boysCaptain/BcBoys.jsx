import { Search } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BcBoys = ({ height, width }) => {
  let array = []
  for (let i = 0; i <= 10; i++) {
    array[i] = i
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [backgroundImage, setBackgroundImage] = useState(
    "https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_hybrid"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check if the file size is less than 2MB
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB.");
        return;
      }

      // Update the background image with the selected image
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };


  const triggerFileInput = () => {
    // Trigger the hidden file input when the div is clicked
    document.getElementById("imageInput").click();
  };

  return (
    <>
      <div
        className="home d-flex flex-column"
        style={{
          width: `${width}px`,
          marginTop: `${height * 0.1 + 10}px`,
          padding: "10px 20px",
        }}
      >
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center">
          <h5>Boys</h5>
          <div className="position-relative">
            <input
              type="text"
              placeholder="Search"
              style={{
                height: "35px",
                width:`${width/2+20}px`,
                borderRadius: "5px",
                border: "1px solid",
                paddingLeft: "10px",
                paddingRight: "35px"
              }}
            />
            {/* Search Icon */}
            <Search
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </div>
        </div>



        {/* Green Divs Section */}
        <div className=' mt-4'
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            columnGap: "10px",
            rowGap: "10px",
            textAlign: "center"


          }}>


          {
            array.map((item, index) => (
              <div className=" p-1 border border-secondary rounded"
                style={{
                  height: "200px",
                  width: `${width / 2 - 25}px`,

                }}
                key={index}
                onClick={handleShow}
              >
                <div style={{ width: "100%", height: "80%", backgroundImage: `url(https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_hybrid)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}></div>

                <h5 className='mt-2'>Name</h5>
              </div>
            ))
          }


        </div>

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Boys Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
          <div onClick={triggerFileInput} style={{ height: "100px", width: "100px", backgroundColor: "green", borderRadius: "10px", border: "1px solid", backgroundImage: `url(https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_hybrid)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}>

          </div>
          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className='d-flex  mt-3' >
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: "18px", fontWeight: "400", lineHeight: "2.45" }}>
                <li>Name </li>
                <li>UID</li>
                <li>Mobile </li>
                <li>Email </li>
                <li>Place </li>
                <li>Works </li>
                <li>Earnings </li>
              </ul>
            </div>
            <div className='ms-2'>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: "18px", fontWeight: "400", }}>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='Name' /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='UID' readOnly /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='Mobile' /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='Email' /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='Place' /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='--' readOnly /> </li>
                <li><input type="text" style={{ borderRadius: "5px", height: "35px", paddingLeft: "5px", paddingRight: "5px", marginBottom: "10px", border: "1px solid" }} placeholder='--' readOnly /> </li>




              </ul>
            </div>

          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BcBoys;
