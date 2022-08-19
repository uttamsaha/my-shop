import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {name, price, description, img, quantity} = props.product;
  return (
    <div className='singleProduct'>
        <img src={img} alt="" />
        <h2>Name: {name}</h2>
        <h3>Price: {price}$</h3>
        <p><b>Quantity: </b>{quantity}</p>
        <p className='description'>{description}</p>
        <button>Buy Now</button>
    </div>
  )
}

export default SingleProduct;