import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg'

const Header = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        window.scrollTo(0, 0);
        navigate('/')
    }
    return (
        <div className='header' onClick={handleNavigateToHome}>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Header;