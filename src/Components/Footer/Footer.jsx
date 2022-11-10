import React from 'react';

import './Footer.css';
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className="copy">
                <h2>Copyright © <span className='name-footer'><a href="https://github.com/GustavoSilverio" rel='noreferrer' target="_blank">Gustavo Oliveira</a></span> All Right Reserved</h2>
            </div>

            <div className="socialMedia">

                <h2>Redes sociais:</h2>

                <div className="icones">
                    <a href="https://wa.me/5511943352341?text=Ol%C3%A1%2C+tudo+bem+%3F" rel='noreferrer' target="_blank"><BsWhatsapp /></a>
                    <a href="https://github.com/GustavoSilverio" rel='noreferrer' target="_blank"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/gustavo-silvério-b16236246/" rel='noreferrer' target="_blank"><BsLinkedin /></a>
                    <a href="https://www.instagram.com/sotzzz/" rel='noreferrer' target="_blank"><BsInstagram /></a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;