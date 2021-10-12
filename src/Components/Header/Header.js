import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hook/usefirebase';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;