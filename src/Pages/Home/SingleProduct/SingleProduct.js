import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {id,name, price, description, img, Quantity} = props.product;
    const navigate = useNavigate();
    const buyNow = id => {
        const path = `/products/${id}`;
        navigate(path);
    }
  return (
    <div className='singleProduct'>
        <img src={img} alt="" />
        <p className='product-name'>Name: {name}</p>
        <h3>Price: {price}$</h3>
        <p><b>Quantity: </b>{Quantity}</p>
        <p className='description'>{description}</p>
        <button onClick={()=>{buyNow(id)}}>Buy Now</button>
    </div>
  )
}

export default SingleProduct;