import React from 'react'
import './WinnersHome.css'
import smallarrow from '../../Images/Vector (3).png'
import heart from '../../Images/Vector (4).png'
import logo from '../../Images/Group 1171279193.png'
import star from '../../Images/star 1.png'
import location from '../../Images/Vector (5).png'
const WinnersPropertyDealers = () => {
  return (
    <>
     <div className='property_dealers_div'>
     <div className='property_dealers_head'> 
     <h1 className='search_cities_head'>Property Dealers Nearby </h1>
     <button>View All Properties
     <img src={smallarrow}></img></button>
     </div> 
     <div className='properties_divs_wrapper'>

     {[1,2,3,4,5,6,7,8,9,10].map((e,i)=>{
        return (<>
            <div className='property_div'>
            <div className='property_img'>
                <div className='like_div_wrapper'>
                    <div className='like_heart_img_div'>
                        <img src={heart}></img>
                    </div>
                    <div className='property_logo_div_wrapper'>
                        <img src={logo}></img>
                    </div>
                </div>
            </div>
            <div className='property_details_wrapper'>
                <div className='property_details_head'>
                    <p className='property_name_para'>Mahavir Property</p>
                    <div className='rating_div'>
                         <img src={star}></img>
                         <p>3.6</p>
                    </div>
                </div>
                <div className='property_details_location'>
                    <img src={location}></img>
                    <p>Noida Sec-15, 3 Years</p>
                </div>
            </div>
        </div>
        </>)
     })}

       
     </div>
   
     </div> 
    </>
  )
}

export default WinnersPropertyDealers
