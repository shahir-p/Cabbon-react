import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import logo from "../assets/cabbon-logo.png";
import { Link } from 'react-router-dom';


const Login = ({ height, width }) => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: `${height}px`, widows: `${width}px` }}>
        <img className='logo ' src={logo} style={{ width:`100px`, height: `100px`, }} />
        <h3 className='mb-5 ' style={{ fontFamily: "Joan, serif" }}>CABBON</h3>
      <div className='border border-secondary rounded p-3 d-flex flex-column  justify-content-center align-items-center'>
      <h3 className='mb-5 ' style={{ }}>Log In</h3>
          <Form.Select className='mb-3' aria-label="Select Catagory" style={{ width: `${width * 0.7}px` }}>
            <option  hidden>Select Catagory</option>
            <option value="manager">Manager</option>
            <option value="captain">Captain</option>
            <option value="vicecaptain">Vice Captain</option>
            <option value="agrade">A Grade</option>
            <option value="bgrade">B Grade</option>
            <option value="general">General</option>
            <option value="boyscaptain">Boy's Captain</option>
          </Form.Select>
          <InputGroup className="mb-3" style={{ width: `${width * 0.7}px` }}>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder='User ID'
            />
          </InputGroup>
          <InputGroup className="mb-5" style={{ width: `${width * 0.7}px` }}>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder='User ID'
            />
          </InputGroup>
        <Link to={'/home'}>  <Button className='mt-3' variant="primary">Sign In</Button></Link>
      </div>
       

      </div>

    </>
  )
}

export default Login