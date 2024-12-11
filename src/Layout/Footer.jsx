import React from 'react'
import logo from '../Images/Group 1171279193 (1).png'
const Footer = () => {
  return (
    <>
      <div className='footer_div_main'>
      <div className='footer_div_wrapper'>
      <div className='footer_div_1'>
        <div className='footer_logo_div'>
          <img src={logo}></img>

        </div>
        <p className='footer_para'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>

        <div className='follow_div'>
          <p className='follow_para'>Follow Us On</p>
          <div className='follow_us_icon_div'>
            <div className='follow_us_icon_img'>
            <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className='follow_us_icon_img'>
            <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className='follow_us_icon_img'>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className='follow_us_icon_img'>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
   
          </div>
        </div>
      </div>
      <div className='footer_links_wrapper'>
      <div className='footer_div_2'>
          <p className='our_company_para'>Our Company</p>
          <div className='mt-3' style={{display:'flex',flexDirection:'column',rowGap:'15px'}}>
            <p className='our_company_links'>Home</p>
            <p className='our_company_links'>About Us</p>
            <p className='our_company_links'>Blog</p>
            <p className='our_company_links'>Careers</p>
          </div>
         </div>
         <div className='footer_div_2'>
         <p className='our_company_para'>Quick Links</p>
          <div className='mt-3' style={{display:'flex',flexDirection:'column',rowGap:'15px'}}>
            <p className='our_company_links'>Home</p>
            <p className='our_company_links'>Product</p>
            <p className='our_company_links'>Support</p>
            <p className='our_company_links'>About</p>
          </div>
         </div>
         <div className='footer_div_2'>
         <p className='our_company_para'>Contact</p>
          <div className='mt-3' style={{display:'flex',flexDirection:'column',rowGap:'15px'}}>
          <div>
          <p className='our_company_address'>Address</p>
          <p className='our_company_links'>Noida Sec. 2</p>
          </div>
          <div>
          <p className='our_company_address'>Email</p>
          <p className='our_company_links'>winners@gmail.com</p>
          </div>
          <div>

          <p className='our_company_links'>Phone</p>
            <p className='our_company_links'>+91-9834737373</p>
          </div>
        
          </div>
         </div>
      </div>
       
      </div>
       <div className='footer_div_copyright'>
        <div>
          <p className='copy_right_winners'>Copyright ©2024 winners</p>
        </div>
        <div>
        <p className='copy_right_winners'>Privacy Policy  |  Terms and Conditions</p>
        </div>
       </div>
      </div>
    </>
  )
}

export default Footer
