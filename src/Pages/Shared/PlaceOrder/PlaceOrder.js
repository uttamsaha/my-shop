import React from 'react'
import { useParams } from 'react-router-dom';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const {productID} = useParams();
    console.log("inside params ",productID);
  return (
    <div>
        <div className="booking-info">
        <h1>Booking Product</h1>
        <p>Please Confirm your order</p>
        </div>
        <div className='input-area'>
            <input type="text" name="" id="" placeholder='Enter address'/>
            <input type="number" name="" id="" placeholder='Enter Phone'/>
            <input type="email" name="" id="" placeholder='Enter email' />
            <input type="number" name="" id="" placeholder='Enter Quantity'/>
            <button>Place Order</button>
        </div>
    </div>
  )
}

export default PlaceOrder;