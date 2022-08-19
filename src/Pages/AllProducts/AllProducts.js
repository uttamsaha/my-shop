import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='tools-container'>
        {
          products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
        }
    </div>
  )
}

export default AllProducts;