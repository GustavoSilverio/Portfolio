import React from 'react';

import './Footer.css';
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className="copy">
                <h2>Copyright © <span className='name-footer'>Gustavo Oliveira</span> All Right Reserved</h2>
            </div>

            <div className="socialMedia">

                <h2>Redes sociais:</h2>

                <div className="icones">
                    <BsWhatsapp />
                    <BsGithub />
                    <BsLinkedin />
                    <BsInstagram />
                </div>

            </div>

        </footer>
    );
}

export default Footer;