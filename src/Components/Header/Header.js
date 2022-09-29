import React from 'react';
import logo from '../../images/logo1.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div  className='header-container'>
            <img src={logo} alt="" />
            <h1>Fitness Care House</h1>
            </div>
            <div className='header-text'>
                <h3>Purchase your interested course & Start your fitness care from Today</h3>
            </div>
        </div>
    );
};

export default Header;
