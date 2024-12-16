import React, { useState } from 'react'
import './Community.css'
import CommunityCover from './CommunityCover'
import img from '../../Images/Rectangle 20 (2).png'
import heart from '../../Images/Vector (4).png'
import whatsapp from '../../Images/Group 534.png'
import send from '../../Images/Vector (11).png'
import img2 from '../../Images/Rectangle 21.png'
import img3 from '../../Images/Rectangle 20 (3).png'
import logo from '../../Images/Group 1171279193.png'
const Community = () => {
  const [show,setShow]=useState(false)
  const handleChange = () =>{
    setShow(!show)
  }
  return (
    <>
  { !show && <>
    <div className='community_wrapper'>
       <div className='community_property_details_wrapper'>
        <div className='property_img_details_div'>
          <div className='property_img_details_inside_content_wrapper'>
            <div className='property_img_details_content'>
              <div className='community_property_img'>
                <img style={{width:'100%',maxWidth:'100%',minWidth:'100%',objectFit:'cover',height:'100%',borderRadius:'10px',cursor:'pointer'}} onClick={(()=>handleChange())} src={img}></img>
                <div className='community_property_name_div'>
                  <p>Mahavir Property</p>
                </div>
                <div className='community_property_logo_div_wrapper5'>
                  <img  src={logo}></img>
                </div>
              </div>
              <div className='community_property_names'>
                <div className='d-flex' style={{display:'flex',columnGap:'5px'}}>
                <sapn className='first_span'>Business Filed:</sapn>
                <span className='second_span'> Gurgaon, New Delhi, Noida </span>
                </div>
                <div style={{display:'flex',columnGap:'5px'}}>
                  <span className='first_span'>
                  Major Locality:
                  </span>
                  <span className='second_span'>DLF, Sushant Lok, Huda City </span>
                </div>
                <div style={{display:'flex',columnGap:'5px'}}>
                  <span className='first_span'>
                  Working Experience: 
                  </span>
                  <span className='second_span'>
                        20 Years
                  </span>
                </div>
              </div>
              <div className='like_skip_div_wrapper'>
                <div className='like_skip_button_div'>
                  <button className='skip_btn'>Like</button>
                  <button className='skip_btn'>Skip</button>
                </div>
                <div className='community_property_icons_div'>
                  <div className='icon_no_1'>
                    <img src={heart}></img>
                  </div>
                  <div className='icon_no_1'>
                    <img src={whatsapp}></img>
                  </div>
                  <div className='icon_no_1'>
                    <img src={send}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h1 className='prefered_cities_head2'>Property In Hand (Requirement)</h1>
<div style={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
{[img,img2,img3].map((e,i)=>{
            return (
              <>
              <div className='property_img_details_inside_content_wrapper2'>
            <div className='community_property_img5'>
              <img src={e}></img>
            </div>
            <div className='community_property_details_wrapper5'>
              <div className='community_property_details_5'>
                


                <div className='community_property_5'>
                <div className='property_para_div'>
                <p className='property_data_para'>Property Type:</p>
                <p className='property_data_para2'>For Sale</p>
                </div>

                <div className='property_para_div'>
                <p className='property_data_para'>BHK:</p>
                <p className='property_data_para2'>3</p>
                </div>
                </div>

                <div className='community_property_5'>

                <div className='property_para_div'>
                <p className='property_data_para'>Address:</p>
                <p className='property_data_para2'>Gurgaon</p>
                </div> 


                <div className='property_para_div'>
                <p className='property_data_para'>Contact:</p>
                <p className='property_data_para2'>+91-9866565567</p>
                </div>
                </div>

                <div className='community_property_5'>
                <div className='property_para_div'>
                <p className='property_data_para'>Area:</p>
                <p className='property_data_para2'>500Y</p>
                </div>


                <div className='property_para_div'>
                <p className='property_data_para'>Extra:</p>
                <p className='property_data_para2'>--</p>
                </div>
                </div>

                <div className='community_property_5'>
                <div className='property_para_div'>
                <p className='property_data_para'>Floor:</p>
                <p className='property_data_para2'>Ground Floor</p>
                </div>
                </div>
              
                
              </div>
              <div className='property_icons_div5'>
              <div style={{padding:'10px 15px 0px 0px',display:'flex',justifyContent:'flex-end'}}>
              <div className='community_property_icons_div'>
                  <div className='icon_no_1'>
                    <img src={heart}></img>
                  </div>
                  <div className='icon_no_1'>
                    <img src={whatsapp}></img>
                  </div>
                  <div className='icon_no_1'>
                    <img src={send}></img>
                  </div>
                </div>
              </div>

              </div>
            </div>
         
          </div>
              </>
            )
          })}
</div>





          
          </div>
         
        </div>
        <div className='client_property_details'>
          <div className='client_in_hand_wrapper'>
          <div className='client_head_div'>
          <h3>Client In Hand (Requirement) </h3>
          </div>
          <div className='community_form_wrapper_div'>
          <form style={{display:'flex',flexDirection:'column',rowGap:'10px'}}>
                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Preferred Localities</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Preferred Localities' type='text'></input>
                  </div>
                </div>

                <div className='community_input_flex_wrapper'>
                  <div className='left_form_wrappr'>
                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Min. Budget</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Amount' type='text'></input>
                  </div>
                </div>
                  </div>
                  <div className='right_form_wrapper'>

                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Max. Budget</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Amount' type='text'></input>
                  </div>
                </div>
                  </div>
                </div> 

                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Floor</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Floor' type='text'></input>
                  </div>
                </div>

                <div className='community_input_flex_wrapper'>
                  <div className='left_form_wrappr'>
                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Min. BHK</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter BHK' type='text'></input>
                  </div>
                </div>
                  </div>
                  <div className='right_form_wrapper'>

                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Max. BHK</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter BHK' type='text'></input>
                  </div>
                </div>

                
                  </div>
                </div> 
                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Fill Your Complete Requirement</label>
                  <div className='community_input_wrapper_div'>
                    <textarea placeholder='Enter Preferred Localities' type='text'></textarea>
                  </div>
                </div>
                  <div className='community_form_submit_div'>
                    <button>Submit</button>
                  </div>
               </form>
          </div>

          </div>

          <div className='client_in_hand_wrapper'>
          <div className='client_head_div'>
          <h3>Property In Hand (Requirement) </h3>
          </div>
          <div className='community_form_wrapper_div'>
          <form style={{display:'flex',flexDirection:'column',rowGap:'10px'}}>
                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Preferred Localities</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Preferred Localities' type='text'></input>
                  </div>
                </div>

                <div className='community_input_flex_wrapper'>
                  <div className='left_form_wrappr'>
                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Min. Budget</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Amount' type='text'></input>
                  </div>
                </div>
                  </div>
                  <div className='right_form_wrapper'>

                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Max. Budget</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Amount' type='text'></input>
                  </div>
                </div>
                  </div>
                </div> 

                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Floor</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter Floor' type='text'></input>
                  </div>
                </div>

                <div className='community_input_flex_wrapper'>
                  <div className='left_form_wrappr'>
                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Min. BHK</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter BHK' type='text'></input>
                  </div>
                </div>
                  </div>
                  <div className='right_form_wrapper'>

                  <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Max. BHK</label>
                  <div className='community_input_wrapper_div'>
                    <input placeholder='Enter BHK' type='text'></input>
                  </div>
                </div>

                
                  </div>
                </div> 
                <div className='community_form_filed_wrapper'>
                  <label className='community_form_label'>Fill Your Complete Requirement</label>
                  <div className='community_input_wrapper_div'>
                    <textarea placeholder='Enter Preferred Localities' type='text'></textarea>
                  </div>
                </div>
                  <div className='community_form_submit_div'>
                    <button>Submit</button>
                  </div>
               </form>
          </div>

          </div>
        </div>
       </div>
    </div>
   </>}
   {  show && <CommunityCover handleChange={handleChange}/>}
    </>
  )
}

export default Community
