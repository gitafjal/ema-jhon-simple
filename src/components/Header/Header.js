import React from 'react';
import logo from '../../images/Logo.svg'
const header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventoy">Inventoy</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default header;
