import React from 'react'
import { Cards } from '../Cards/Cards'
import { Footer } from '../Footer/Footer'
import { UserData } from '../../data/data'

import './Grid.css'

export const Grid = () => {

  const user = UserData;

  return (
    <div className='contenedor'>
      <div className='container-grid'>
        {
          user.projects.map((m,index)=>
            <Cards key={ index }
                        { ...m }
            />
            )
        }        
      </div>
      <Footer />
    </div>
  )
}
