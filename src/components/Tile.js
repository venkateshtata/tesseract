import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBRow,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import '../styles/tile.css';




const Tilee = (props) => (



<div className="div_tile">
    <MDBRow >
        <MDBCol className="tile_card" style={{ maxWidth: "22rem" }}>
            <MDBCard >
                <MDBCardImage classNamke="as" className="img-fluid" src="https://cdna.artstation.com/p/assets/images/images/020/407/864/original/alex-rain-turntable.gif"
                waves />
                <MDBCardBody className="tile">
                < MDBCardTitle className = "tile_title" > Custom Artifact </MDBCardTitle>
                < MDBCardText className = "tile_text" > Send us the 3D file of what you wish to gift or have for yourself, we will print and deliver it to you. You can even order from our in-house artefact store.</MDBCardText>
                <MDBBtn className = "tile_btn" href="http://localhost:3000/artifact">Print</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol className = "tile_card" style={{ maxWidth: "22rem" }}>
            <MDBCard >
                <MDBCardImage className="img-fluid" src="https://66.media.tumblr.com/tumblr_maorxhkE2x1rgndfmo1_400.gifv"
                waves />
                <MDBCardBody className="tile">
                <MDBCardTitle className="tile_title">Engineering and Robotics</MDBCardTitle>
                <MDBCardText className="tile_text">We print frames and arms exactly how you need it for your project, just send us your 3D file and we'll take care of rest.</MDBCardText>
                <MDBBtn className = "tile_btn" href="http://localhost:3000/robotics">Print</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol className = "tile_card" style={{ maxWidth: "22rem" }}>
            <MDBCard >
                <MDBCardImage className="img-fluid" src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/17a6de2da72e616645fa173ac45d7e74/original.gif"
                waves />
                <MDBCardBody className="tile">
                < MDBCardTitle className = "tile_title" > Rapid Prototyping </MDBCardTitle>
                < MDBCardText className = "tile_text">3D printing is transforming the way we design and manufacture. Being able to rapidly model, build and test new products is an invaluable capability in our fast-paced competitive world. Rapid prototyping using 3D printing allows engineers and designers to execute inexpensive, quick and frequent revisions of their designs and creations.</MDBCardText>
                <MDBBtn className = "tile_btn" href="http://localhost:3000/prototyping">Print</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
</div>
    

);


export default Tilee;
