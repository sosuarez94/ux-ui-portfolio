import React from 'react'
import { SideBarLeft } from '../components/SideBar/SideBarLeft'
import { SideBarRight } from '../components/SideBar/SideBarRight'
import { Grid } from '../components/Grid/Grid'

import './Home.css'


export const Home = () => {
  return (
    <div className='container'>
      <SideBarLeft/>
      <Grid/>
      <SideBarRight/>
    </div>
  )
}
