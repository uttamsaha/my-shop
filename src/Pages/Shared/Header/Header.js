import React from 'react';
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Tools</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header;