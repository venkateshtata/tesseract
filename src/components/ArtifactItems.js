import React, {useState} from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import '../styles/artifactItems.css';
import CustomModelUpload from './CustomModelUpload';
import Modal from 'react-modal'
import RenderWindow from './RenderWindow';

import Button from 'react-bootstrap/Button'

import j1 from "./artifacts/j9.obj";
import j2 from "./artifacts/j6.obj";
import j3 from "./artifacts/droneB.obj";
import j4 from "./artifacts/droneA.obj";
import j5 from "./artifacts/j5.obj";
import j6 from "./artifacts/j2.obj";
import j7 from "./artifacts/j7.obj";
import j8 from "./artifacts/j8.obj";

import j1_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j1.png"
import j2_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j2.png"
import j3_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j3.png"
import j4_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j4.png"
import j5_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j5.png"
import j6_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j6.png"
import j7_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j7.png"
import j8_img from "/home/peacock/Desktop/euclid3d/my-app/src/components/artifacts/j8.png"



var itemm = '';
var current_item = 'A-1';


function ArtifactItems() {

    


    const [modalIsOpen, setModalIsOpen] = useState(false);


   
    
    return(
    <div className="artifactItems">

       <CustomModelUpload/>

       <Modal  className="modal_style" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
           <div className="modal_content">
           <h1>-</h1>
            <p className="modal_t">{current_item}</p>
           <p className="modal_para">Description</p>
           <div className="render">
           <RenderWindow item={itemm} />
           </div>
           <div>
               <p className="modal_price">Price: ₹1800</p>
               {/* <Button className="modal_btn" variant="outline-primary" onClick={()=>setModalIsOpen(false)} >Place Order</Button> */}
               <Button className="modal_btn" onClick={()=>setModalIsOpen(false)} variant="outline-dark">Place Order</Button>
           </div>
        </div>
       </Modal>




      <section className="text-center my-5">

      <h2 className="artifactStoreHeading">Artifact Store</h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">You can order from our exclusive in-house store of 3D designs hand-picked by our team.</p>
       
      <MDBRow className="artifactItemsRow">

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j1_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text" onClick={()=> {setModalIsOpen(true); itemm = j1; current_item = 'A-1'}}>
                    A-1
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j2_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j2; current_item = 'A-2'}}>
                    A-2
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j3_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j3; current_item = 'A-3'}}>
                    A-3
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j4_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j4; current_item = 'A-4'}}>
                    A-4
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>

      < MDBRow className = "artifactItemsRow" >
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j5_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j5; current_item = 'A-5'}}>
                    A-5
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j6_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j6; current_item = 'A-6'}}>
                    A-6
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j7_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j7; current_item = 'A-7'}}>
                    A-7
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={j8_img}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text" >
              </a>
              <h5>
                <strong>
                      <a href="#!" className="dark-grey-text" onClick={() => { setModalIsOpen(true); itemm = j8; current_item = 'A-8'}}>
                    A-8
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  </div>
 );

    };
 export default ArtifactItems;
