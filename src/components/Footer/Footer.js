import React from 'react'
import { UserData } from '../../data/data'

import './Footer.css'

export const Footer = () => {

  const user = UserData;

  return (
    <div className='footer'>
      {
        user.education.map((m, index) =>
          <div className='img-box' key={index}>
            <span className='bread'>{m.name}</span>
            <a href={m.url} target="_blank" rel="noreferrer" className='logo-img'>
              <img src={m.img} alt='education' /></a>
          </div>
        )
      }
    </div >
  )
}
