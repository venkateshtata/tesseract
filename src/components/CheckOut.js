import React from 'react';
import '../styles/check_out.css';
import Topic from './Topic';
import HrTwo from './HrTwo';
import OrderForm from './OrderForm';
import SelectedItem from './SelectedItem';




class CheckOut extends React.Component {
  render() {
      
    return (
    <div>
        <Topic text="Order Details"/>
        <HrTwo/>
        <SelectedItem/>
        <OrderForm/>

    </div>
    );
  }
}
export default CheckOut