import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';



const Header = () => (
  <div>
  <Navbar className="nav" variant="dark">
    <Navbar.Brand className="logo" href="#home">Euclid 3D</Navbar.Brand>
    <Nav className="mr-auto">

        <NavDropdown  className="test" title="Print Materials" id="basic-nav-dropdown">
            <NavDropdown.Item className="test2" href="#action/3.1">FDM (Plastic)</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className="test2" href="#action/3.2">SLA (Risen)</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className="test2" href="#action/3.3">SLS (Power)</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className="test"  title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item className="test2" href="#action/3.1">Custom Artifact</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className="test2" href="#action/3.2">Engineering and Robotics</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className="test2" href="#action/3.3">Rapid Prototyping</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link className="test" href="#features">Learn</Nav.Link>
        <Nav.Link className="test" href="#pricing">About</Nav.Link>

    </Nav>



      <Button className="nav_button" variant="outline-light">Upload and Order</Button>

  </Navbar>
  </div>
);


export default Header;
