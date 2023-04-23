import React, { useEffect, useRef } from 'react'
import { Carrusel } from '../Carrusel/Carrusel'
import './Modal.css'

export const Modal = (props) => {

    let works = props[0];
    let color = props[1];
    let icon = props[2];

    const handleBack = () => {
        props.onClick(false);
    };

    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleBack()
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);


    return (
        <div className='container-modal'>
            <div ref={modalRef} className='modal-box' style={{ 'border': `8px solid ${color}` }}>
                <div className='circle'>
                    <div className='img-project'>
                        <img className='img-project' src={icon} alt='icon-img' />
                    </div>
                </div>
                <div className='modal'>
                    <div className='container-button'>
                        <button className='go-back' onClick={handleBack}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/arrow-back.png`} alt='arrow-back' />
                        </button>
                    </div>
                    <Carrusel works={works} color={color} />
                </div>
            </div>
        </div>
    )
}
