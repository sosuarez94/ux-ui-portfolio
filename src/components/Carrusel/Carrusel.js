import React, { useState } from 'react';

import './Carrusel.css';

export const Carrusel = ({ works, color }) => {
    const firtsProject = works[0];
    const [projectURL, setProjectURL] = useState(firtsProject.url);
    const [images, setImages] = useState(firtsProject.img);
    const [idProject, setIdProject] = useState(firtsProject.id);
    const [imgAct, setImgAct] = useState(0);
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    const cant = images?.length;

    const handleClick = (obj) => {
        setProjectURL(obj.url);
        setImages(obj.img);
        setIdProject(obj.id);
        setImgAct(0);
        setDisablePrev(true);
        setDisableNext(false);
    };

    const nextImge = () => {
        setImgAct(imgAct + 1);
        if (imgAct + 2 === cant) {
            setDisableNext(true);
        }
        if (imgAct + 1 > 0) {
            setDisablePrev(false);
        }
    };

    const returnImge = () => {
        setImgAct(imgAct - 1);
        if (imgAct - 2 === -1) {
            setDisablePrev(true);
        }
        if (imgAct - 1 < cant - 1) {
            setDisableNext(false);
        }
    };


    return (
        <>
            <div className='contain-carrucel'>
                <div className='box-carrusel'>
                    <div className='container-Img' >
                        {images.map((m, index) => (
                            <div className='img-box' key={index}>
                                {imgAct === index && <img loading="lazy" src={m} alt="img" />}
                            </div>
                        ))}
                        <a href={projectURL} target="_blank" rel="noreferrer" className='ver-proyecto' style={{visibility:(projectURL === '')? 'hidden':'visible'}}>
                            <span>Ver proyecto</span>
                        </a>
                    </div>
                </div>
                <div className='contain-links'>
                    {works.map((m) => (
                        <button
                            className='projects'
                            key={m.id}
                            onClick={(e) => handleClick(m)}
                            style={{ background: (m.id === idProject) ? `${color}` : null }}
                        >
                            {m.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='carrusel-buttons'>
                <button className='preview' onClick={returnImge} disabled={disablePrev} style={{ background: (!disablePrev) ? `linear-gradient(-138.36deg, ${color} 10%, #f0f0f0 100%)` : 'null' }}>
                    {disablePrev ? null : <img src={process.env.PUBLIC_URL + '/assets/images/icons/preview.png'} alt='' />}
                </button>
                <button className='next' onClick={nextImge} disabled={disableNext} style={{ background: (!disableNext) ? `linear-gradient(138.36deg, ${color} 10%, #f0f0f0 100%)` : 'null' }}>
                    {disableNext ? null : <img src={process.env.PUBLIC_URL + '/assets/images/icons/next.png'} alt='' />}
                </button>
            </div>
        </>
    );
};