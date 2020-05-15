import React from 'react';
import '../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const Footer = () => (
    <MDBFooter className="footer">
      <MDBContainer fluid className="footer_body">
        <MDBRow className="footer_content">
          <MDBCol md="6">
            <img className="footer_img" src={image}></img>
            
          </MDBCol>
          <MDBCol className="footer_address" md="6">
            <h5 className="footer_title">Contact:</h5>
            <p className="footer_description">E3D, Brigade Tech Park, Whitefield, Bangalore</p>
            <p className="footer_description">Phone: +91 7032851369, 7760698044</p>
            
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000"> www.e3d.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
);


export default Footer;

