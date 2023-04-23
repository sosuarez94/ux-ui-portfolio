import React from 'react'
import { UserData } from '../../data/data'

export const SideBarRight = () => {

  const user = UserData;

  return (
    <div className='bar-right'>
      {
        user.skills.map((m, index) =>
          <div className='logos-img' key={index}>
            <span className='bread'>{m.name}</span>
            <img src={m.img} alt='' />
          </div>
        )
      }
    </div>
  )
}
