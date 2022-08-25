import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
  return (
    <div>
        <nav>
            <div className="logo">
                <h1>My-Shop</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/posts">Blogs</Link></li>
                    {/* <li><Link to="#">About us</Link></li> */}
                    {
                        user ? <button onClick={handleSignOut} className='signOut'>Sign Out</button> : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header;