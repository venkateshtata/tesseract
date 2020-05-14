import React from 'react';
import '../styles/sections.css';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import dental from './dental.jpeg'
import auto1 from './auto1.png'




const Sections = () => (
     <section className="my-5">
        <MDBRow className="sec-img2">
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Engineering</h5>
                <p className="grey-text">
                 Reliably integrate 3D printing across design and product development workflows and rapidly create prototypes with a range of materials.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Manufacturing</h5>
                <p className="grey-text">
                 Produce high precision, functional 3D prints that can stand in for final parts and stand up to the rigors of the factory floor, from pre-production validation to jigs and fixtures to end-use parts.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="money-bill-alt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p className="grey-text">
                 Encourage creativity and expose students to the same professional-level technology used by businesses in a range of industries. 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src={auto1}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>

         <MDBRow className="sec-img2">
            <MDBCol lg="5">
                <img 
                src={dental}
                alt=""
                className="img-fluid rounded z-depth-1"
                />
            </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Healthcare</h5>
                <p className="grey-text">
                 Open the door to high-impact medical applications, while saving significant time and costs from the lab to the operating room.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Dental</h5>
                <p className="grey-text">
                 Learn how dental labs and practices of any size can build reliable, high quality, easy-to-use digital workflows for dental models, surgical guides, splints, retainers, and more.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="money-bill-alt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Jewelry</h5>
                <p className="grey-text">
                 Easily integrate a fully digital workflow with us for jewelry production through 3D printing. Rapidly prototype designs, fit clients, and produce large batches of ready-to-cast pieces.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          
        </MDBRow>

        
      </section>
);


export default Sections;
