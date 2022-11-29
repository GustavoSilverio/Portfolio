import React from 'react';

import './navbar.css';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="greeting">
                <Link to="/"><img src={Logo} className='logo' alt=" " /></Link>
                <Link to="/"><h1 className='name'>Gustavo</h1></Link>
            </div>

            <div className="menu">
                <ul>
                    <Link to="/"><li>About me</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <a href="https://wa.me/5511943352341?text=Ol%C3%A1%2C+tudo+bem+%3F" rel='noreferrer' target="_blank"><li className='contact'>Contact</li></a>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;