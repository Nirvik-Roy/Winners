import React from 'react'
import image from '../../Images/Rectangle 20 (1).png'
import whatsapp from '../../Images/Group 534.png'
import arrow2 from '../../Images/Vector (11).png'
import heart from '../../Images/Vector (10).png'
import plus from '../../Images/Vector@2x.png'
const PropertyGrid = () => {
  return (
    <>
      <div className='property_grid_div'>
      {[1,2,3,4].map((e,i)=>{
        return(
            <>
            <div className='property_grid_one' key={i}>
            <div className='propety_grid_img'>
                <img className='propety_grid_img_display' src={image} />
                <div className='heart_div_2'>
                    <img src={heart}></img>
                </div>
            </div>
            <div className='property_grid_data'>
            <div className='property_grid_content'>
            <div className='property_data'>
                <div className='property_para_div'>
                <p className='property_data_para'>Locality:</p>
                <p className='property_data_para2'>DLF</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>BHK:</p>
                <p className='property_data_para2'>3</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Contact:</p>
                <p className='property_data_para2'>+91-9866565567</p>
                </div>
                 
                </div>
                <div className='property_data'>
                <div className='property_para_div'>
                <p className='property_data_para'>Address:</p>
                <p className='property_data_para2'>Sector 2</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Property Type:</p>
                <p className='property_data_para2'>For Sale</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Age:</p>
                <p className='property_data_para2'>2</p>
                </div>
                </div>
                <div className='property_data'>
                     <div className='property_para_div'>
                <p className='property_data_para'>Area:</p>
                <p className='property_data_para2'>500Y</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Bathroom:</p>
                <p className='property_data_para2'>2</p>
                </div>


                <div className='property_para_div'>
                <p className='property_data_para'>Price:</p>
                <p className='property_data_para2'>6 Lakhs</p>
                </div>
                
                </div>
                <div className='property_data'>

                <div className='property_para_div'>
                <p className='property_data_para'>Flat:</p>
                <p className='property_data_para2'>Ground Floor</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Owner Name:</p>
                <p className='property_data_para2'>Chauhan</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>Extra:</p>
                <p className='property_data_para2'>--</p>
                </div>
                    
                </div>
            </div>
          <div className='report_this_property_wrapper'>
          <div className='report_this_div'>
          <div className='report_checkbox'></div>
          <p>Report this property</p>
          </div>

          <div className='report_this_div'>
          <div className='report_checkbox'></div>
          <p>Sold Out</p>
          </div>

          <div className='report_this_div'>
          <div className='report_checkbox'></div>
          <p>Rent Out</p>
          </div>
         
          </div>

          <div className='remark_button_wrapper_div'>
            <p>Remark</p>
            <input type='text' placeholder='Type something for your own use...'></input>
            <div className='submit_btn_icon_wrapper'>
                <button>Submit</button>
                <div className='d-flex' style={{columnGap:'12px'}}>
                <div className='icon_1_div'>
                    <img src={heart}></img>
                </div>
                <div className='icon_1_div'>
                    <img src={whatsapp}></img>
                </div>
                <div className='icon_1_div'>
                    <img src={arrow2}></img>
                </div>
                </div>
                
            </div>
          </div>
            </div>
            <div className='plus_div_icon'>
                <img src={plus}></img>
            </div>
        </div>
            </>
        )
      })}


        
      </div>
    </>
  )
}

export default PropertyGrid
