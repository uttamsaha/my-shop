import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <h1>My-Shop</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">All Products</Link></li>
                    <li><Link to="/posts">Blogs</Link></li>
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header;