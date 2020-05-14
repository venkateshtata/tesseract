import React from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import '../styles/upload_btn.css';
import Button from 'react-bootstrap/Button'
import HrTwo from './HrTwo'






const CustomModelUpload = () => (
    <div className="upload_section">

    
    <h2>Print Custom 3D Model</h2>

    <Button className="upload_btn" variant="outline-success">Print 3D</Button>
    <HrTwo/>

    </div>

);


export default CustomModelUpload;

