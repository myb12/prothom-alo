import React from 'react';
import Logo from '../../../assets/images/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Header;