import React from 'react';

import './home.css';
import ProfPic from '../../assets/img/prof pic.jpg';
import Curriculo from '../../assets/curriculo/Gustavo-Oliveira.pdf';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="about-me">
                    <div className="prof-pic">
                        <img className='img' src={ProfPic} alt="minha foto de perfil" />
                    </div>

                    <div className="about">
                        <h1><span className='color'>Gustavo</span> Silvério</h1>

                        <h2>Desenvolvedor e <span className='color'>Designer</span></h2>

                        <p>Sou um desenvolvedor iniciante com o objetivo de me tornar um <span className='color'>Full-stack dev</span>, tenho um amplo conhecimento em <span className='color'>HTML</span> E <span className='color'>Css</span>, e estou estudando <span className='color'>Javascript/React</span>, posso te oferecer sites bem interativos e animados, como tambem posso fazer sites “Mordernos”, Minimalistas mas muito bonitos !. No momento estudo na <span className='color'>Etec MCM</span> cursando Programação,e tambêm tenho um <span className='color'>inglês</span> intermediario podendo conversar tranquilamente.</p>
                    </div>
                </div>
                <div className="download">
                    <a href={Curriculo} download="Gustavo Oliveira">Download C.V.</a>
                </div>
            </div>
        </>
    );
}

export default Home;