import React from 'react'
import dropdown from '../../Images/Vector (8).png'
const PreferedCity = () => {
  return (
    <>
     <div className='prefered_city_div'>
     <div className='prefered_city_form_wrapper'>
     <h1 className='prefered_cities_head'>Find Your Property in Your Preferred City </h1>
     <form>
     <div className='form_fields_wrapper'>
        <div className='form_filed'>
            <label className='form_label'>City</label>
            <div className='form_filed_input_div'>
                <input type='text' placeholder='Select City' readOnly/>
                <img src={dropdown}></img>
            </div>
        </div>

        <div className='form_filed'>
            <label className='form_label'>Area</label>
            <div className='form_filed_input_div'>
                <input type='text' placeholder=' Select Area' readOnly />
            </div>
        </div>

        <div className='form_filed'>
            <label className='form_label'>Property Type</label>
            <div className='form_filed_input_div'>
                <input type='text' placeholder='Select Property Type'  readOnly/>
            </div>
        </div>
        
         <button className='search_property_btn'>Search Property</button>
         
      
     </div>
     </form>
    
     </div>
    
     </div> 
    </>
  )
}

export default PreferedCity
