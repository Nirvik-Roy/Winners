import React from 'react'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'
import bell from '../Images/fi_1827330.png'
import admin from '../Images/Ellipse 1588.png'
import settings from '../Images/fi_318477.png'
const Header = () => {
  return (
    <>
    <Sidebar/>
    <div className='uni_wrapper'>
       <div className='uni_container'>
        <nav className=' nav_wrapper'>
           <div className='admin_morning-div'>
            <p className='good-morning-para'>Good Morning, Swati</p>
            <p className='find-out-value-para'>Find out the value of your house and follow it over time</p>
           </div>
           <div className='nav_links-div'>
            <NavLink className={'nav-links'} to={'/'}>Home</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Properties</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Community</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Profile</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>About Us</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Blog</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Price</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Payment</NavLink>
            <NavLink className={'nav-links'} to={'/cc'}>Carrier</NavLink>
           </div>

           <div className='bell_data_wrapper h-100'>
           <div className='bell-div'>
           <img src={bell}></img>
           </div>
                
                <div className='admin_nav_data'>
                  <div className='admin_img'>
                    <img src={admin}></img>
                  </div>
                  <div className='admin_name_div'>
                    <p className='admin_name_para'>Swati Srivastava</p>
                    <p className='admin_email'>swati@gmail.com</p>
                  </div>
                  <div className='settings-img'>
                   <img src={settings}></img>
                  </div>
                </div>
           </div>
        </nav>
       </div>
    </div>
    </>
  )
}

export default Header
