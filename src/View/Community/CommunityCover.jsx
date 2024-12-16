import React from 'react'
import cover from '../../Images/Rectangle 20 (2).png'
import cross from '../../Images/Vector (14).png'
import logo from '../../Images/Group 1171279193.png'
const CommunityCover = ({handleChange}) => {
  return (
    <>
      <div className='community_wrapper'>
         <div className='community_cover_wrapper'>
            <div className='community_cover_img_div'>
                <img style={{width:'100%',maxWidth:'100%',minWidth:'100%',height:'100%',objectFit:'cover',borderRadius:'8px'}} src={cover}></img>
                <div className='cross_div'>
                    <img onClick={(()=>handleChange())} src={cross}></img>
                </div>
                <div className='property_name_big_div'>
                    <p>Mahavir Property</p>
                </div>

                <div className='property_big_logo_div'>
                    <img style={{width:'100%',maxWidth:'70%',minWidth:'70%',objectFit:'cover',}} src={logo}></img>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default CommunityCover
