import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/upload_section.css';





const UploadSection = () => (
  <div>
      <Form className="upload_btn">
        <Form.File id="custom-file" label="Upload your 3D model in .obj or .stl format" custom/>
      </Form>
  </div>
);


export default UploadSection;

