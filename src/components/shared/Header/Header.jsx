import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header' onClick={() => navigate('/')}>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Header;