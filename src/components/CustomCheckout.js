import React from 'react';
import UploadSection from './UploadSection';
import Topic from './Topic';
import OrderForm from './OrderForm';


class CustomCheckout extends React.Component {
  render() {
      
    return (
    <div>
        <Topic text="Upload your 3D model "/>
        <UploadSection/>
        <OrderForm/>
    </div>
    );
  }
}
export default CustomCheckout;