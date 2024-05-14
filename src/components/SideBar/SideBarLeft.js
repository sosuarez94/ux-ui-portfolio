import React, { useEffect, useState } from 'react'
import { UserData } from '../../data/data'

import './SideBar.css'

export const SideBarLeft = () => {

  const user = UserData;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % user.images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageIndex, user.images]);

  return (
    <div className="container-bar-left">
      <div className='bar-left'>
        <div className='img-profile'>
          <img loading='lazy' src={user.images[imageIndex]} alt='cv-img' className='img-profile-transition' />
        </div>
        <h3 className='name'>{user.name}</h3>
        <div>
          {
            user.profile.map((m, index) =>
              <h2 className='profile' key={index}>{m}</h2>
            )
          }
        </div>
        <div className='line-div'></div>
        <ul>
          {
            user.softSkills.map((m, index) =>
              <li className='skill-soft' key={index}><div className='circulito'></div><span>{m}</span></li>
            )
          }
        </ul>

        <a className='download-cv' href={user.cv} download="cv-portfolio.pdf">
          <img loading='lazy' src={user.icon} alt="user-icon" />
          <span>Currículum</span>
        </a>

        <div className='footer-left'>
          <ul>
            {
              user.contacme.map((m, index) =>
                <li key={index}>
                  <a href={m.url} target="_blank" rel="noreferrer" className='logo-img'>
                    <img loading='lazy' src={m.img} alt='icono-redSocial' /></a>
                </li>
              )
            }
          </ul>
        </div>
      </div>

      <div className='cont-hobbie'>
        {
          user.hobbies.map((m, index) =>
            <div key={index} className="hobbie-img">
              <img loading='lazy' src={m.img} alt={m.name} />
            </div>
          )
        }
      </div>
    </div>
  )
}
