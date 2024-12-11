import React from 'react'
import './WinnersHome.css'
import img1 from '../../Images/Frame 1991425481.png'
import img2 from '../../Images/Frame 1991425472.png'
import img3 from '../../Images/Frame 1991425473.png'
import img4 from '../../Images/Frame 1991425481.png'
const Apartments = () => {
  return (
    <>
     <div className='apartments_div'>
     <h1 className='prefered_cities_head'>Apartments, Villas and more</h1>
     <div className='apartments_wrapper'>
     {[img1, img2, img3, img4].map((e,i)=>{
        return(
            <>
            <div className='apartment'>
                <img src={e}></img>
            </div>
            </>
        )
     })}
       
     </div>
     </div> 
    </>
  )
}

export default Apartments
