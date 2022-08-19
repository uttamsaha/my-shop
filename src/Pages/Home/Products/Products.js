import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import "./Products.css"
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,8)))
    },[])

    const navigate = useNavigate();
    const seeProducts = () => {
      navigate("/products")
    }
  return (
    <div className='products-container'>
        <h1>Available Products</h1>
        <div className="products">
          {
            products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
          }
        </div>
        <button className='product-btn' onClick={seeProducts}>See All Products <BsFillArrowRightCircleFill/></button>
    </div>
  )
}

export default Products;