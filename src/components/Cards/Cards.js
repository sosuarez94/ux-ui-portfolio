import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import './Cards.css'

export const Cards = ({
    title,
    img,
    works,
    color,
    icon,
}) => {
    const [mostrar, setMostrar] = useState(false);

    const handleModal = () => {
        setMostrar(!mostrar)
    }

    //click back hijo
    const cerrarHijo = (cierre) => {
        setMostrar(cierre)
    };

    return (
        <>
            <div className='card' onClick={handleModal}>
                <div className='title'>{title}</div>
                <img src={img} alt='img-card' />
            </div>
            {mostrar ?
                (<Modal onClick={cerrarHijo} {...[works, color, icon]} />) : null

            }
        </>
    )
}
