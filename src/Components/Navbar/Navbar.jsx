import React from 'react';

import './navbar.css';
import Logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <nav>
            <div className="greeting">
                <img src={Logo} className='logo' alt=" " />
                <h1 className='name'>Gustavo</h1>
            </div>

            <div className="teste"></div>

            <div className="menu">
                <ul>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;