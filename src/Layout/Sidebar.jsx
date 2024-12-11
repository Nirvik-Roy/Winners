import React from 'react'
import logo from '../Images/Group 1171279193.png'
import {NavLink} from 'react-router-dom'
import tick from '../Images/Frame 1991425400 (1).png'
import plus from '../Images/fi_2801881 (1).png'
import disable from '../Images/Frame 1991425400 (2).png'
import heart from '../Images/fi_3641323.png'
import comments from '../Images/fi_3641323 (1).png'
import price from '../Images/Frame 1991425400 (3).png'
import profile from '../Images/Frame 1991425400 (4).png'
import locality from '../Images/Frame 1991425400 (5).png'
import subLocality from '../Images/Frame 1991425400 (6).png'
import logout from '../Images/Frame 1991425400 (7).png'
const Sidebar = () => {
  return (
    <>
        <div className='sidebar_main_div'>
           <div className='sidebar_logo_wrapper d-flex justify-content-center'>
            <div className='sidebar_logo_img'>
                <img src={logo}></img>
            </div>
           </div>

           <div className='sidebar_icons_div_wrapper'>

           <div style={{rowGap:'30px',display:'flex',flexDirection:'column',marginTop:'20px'}}>
           <NavLink to={'/'} className='sidebar_icons_wrapper'>
            <img src={tick}></img>
                <NavLink  className='sidebar_icons'>All Confirm Data</NavLink>
            </NavLink>

            <NavLink to={'/cc'} className='sidebar_icons_wrapper'>
            <img src={plus}></img>
                <NavLink to={'/cc'}  className='sidebar_icons'>Newly Added Data</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={disable}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>De active Data</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={heart}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>List of Favourites</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={comments}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Comments</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={price}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Price List</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={profile}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Profile</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={locality}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Locality Wise Data</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={subLocality}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Sub Locality</NavLink>
            </NavLink>

            <NavLink to={'/cd'} className='sidebar_icons_wrapper'>
            <img src={logout}></img>
                <NavLink to={'/cd'}  className='sidebar_icons'>Logout</NavLink>
            </NavLink>
            
           </div>
          



            <div className='sidebar_upgrade_now_div_wrapper d-flex justify-content-center align-items-center'>
                <div className='sidebar_upgrade_now_div'>
                    <h5 className='sidebar_upgrade_now_head'>UPGRADE NOW</h5>
                    <p className='sidebar-premium-text'>Get Premium Community</p>
                    <div className='d-flex justify-content-center' style={{marginTop:'35px'}}>
                    <button className='sidebar_upgrade_button'>Upgrade Now</button>
                    </div>
                 
                </div>
            </div>
           </div>
        </div>
    </>
  )
}

export default Sidebar
