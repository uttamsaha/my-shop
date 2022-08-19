import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='products-container'>
        <h1>Available Products</h1>
        <div className="products">
          {
            products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
          }
        </div>
    </div>
  )
}

export default Products;