import React from 'react'
import arrow from '../../Images/Vector (2).png'
import image3 from '../../Images/image 3.png'
import data from './WinnersCitiesData'
import './WinnersHome.css'
const WinnersHomeCities = () => {
  return (
    <>
      <div className='search_cities_div'>
        <h1 className='search_cities_head'>Search by Cities </h1>
        <div className='cities_name_container'>

        {data.map((e,i)=>{
            return (
                <>
                <div key={i} className='citites_div' style={{backgroundImage: ` url("${e.img}")`}}>
                <div className='cities_name_wrapper'>
                <div className='citi_name_para_div'>
                <p className='citi-name-para'>{e.title}</p>
                <img className='img-class' src={arrow} style={{width:'22px',marginTop:'5px'}}></img>
              
                </div>
                     <p className='properties_name_para'>{i+2}{e.properities}+ Properties </p>
                </div>
            </div>
                </>
            )
        })}

        </div>
      </div>
    </>
  )
}

export default WinnersHomeCities
