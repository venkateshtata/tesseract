import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Col }  from 'react-bootstrap'
import '../styles/order_form.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';






function OrderForm(){ 

     const [modalIsOpen, setModalIsOpen] = useState(false);

      return (
<div>

     <Modal  className="modal_style" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
           <div className="modal_content">
           <h1>-</h1>
            <p className="modal_t">Order Placed !</p>
           <p className="modal_para">Our executive will shortly contact you. Please reach us at +91 7032851369 for further information regarding your order.</p>
           <div>
               {/* <Button className="modal_btn" variant="outline-primary" onClick={()=>setModalIsOpen(false)}>Home</Button> */}
               <Button className="modal_btn" href="http://localhost:3000/" variant="outline-dark">Home</Button>
           </div>
        </div>
       </Modal>


  <div className="form_div">
    <Form className="form_style">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your full name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>House No.</Form.Label>
    <Form.Control placeholder="House number with any landmark" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Complete address" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>State</Form.Label>
      <Form.Control />
    </Form.Group>

     <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Pincode</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Print Material</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>FDM</option>
        <option>SLA</option>
        <option>SLS</option>
      </Form.Control>
    </Form.Group>
    

   
  </Form.Row>
  


  
    </Form>
    <Button className="form_button" variant="primary" type="submit" onClick={()=> {setModalIsOpen(true);}}>Place Order</Button>
            

    
  </div>

  </div>

      );
};


export default OrderForm;

