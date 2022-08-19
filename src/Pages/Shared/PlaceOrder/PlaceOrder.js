import React from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import './PlaceOrder.css';
const PlaceOrder = () => {
    const {productID} = useParams();
    console.log("inside params ",productID);

    const orderConfirm = () => {
        Swal.fire(
            'Congratulations!',
            'Your oder Confirmed!',
            'success'
          )
    }
  return (
    <div>
        <div className="booking-info">
        <h1>Booking Product</h1>
        <p>Please Confirm your order</p>
        </div>
        <div className='input-area'>
            <input type="text" name="" id="" placeholder='Enter address' required/>
            <input type="number" name="" id="" placeholder='Enter Phone' required/>
            <input type="email" name="" id="" placeholder='Enter email' required/>
            <input type="number" name="" id="" placeholder='Enter Quantity' required/>
            <button onClick={orderConfirm}>Place Order</button>
        </div>
    </div>
  )
}

export default PlaceOrder;