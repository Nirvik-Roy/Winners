import React from 'react'
import './WinnersHome.css'
import rectangle from '../../Images/Rectangle 6667501.png'
import bars from '../../Images/Group 1171279334.png'
import WinnersHomeCities from './WinnersHomeCities'
import WinnersPropertyDealers from './WinnersPropertyDealers'
import WinnersAbout from './WinnersAbout'
import PreferedCity from './PreferedCity'
import Apartments from './Apartments'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const WinnersHome = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
   <div className='uni_wrapper'>
    <div className='uni_container'>
        <div className='winner_home_content_wrapper ' >
        <Slider {...settings}>
              <div>
              <div className='real_estate_div'>
                <div className='real_estate_content'>
                    <div className='bars_img'>
                        <img src={bars}></img>
                    </div>

                    <div style={{padding:'0px 40px'}}>
                        <h1 className='real-head'>REAL</h1>
                        <h1 className='estate-head'>ESTATE</h1>
                        <p className='estate-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <div className='real-estate-icons-div-wrapper'>
                    <div className='social-icons-img-div'>
                    <i className="fa-brands fa-instagram "></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>

                <div className='real-estate-contact-icons-div'>
                    <div className='real-estate-contact-wrapper'>
                        <i class="fa-solid fa-phone"></i>
                        <p>00 54 8 352 587994</p>
                    </div>

                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-globe"></i>
                        <p>www.yourweb.com</p>
                    </div>
                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-envelope"></i>
                        <p>yourcompany@gmail.com</p>
                    </div>
                </div>
                    </div>

                </div>
                <div className='real_estate_img_div'>
                    <img src={rectangle}></img>
                </div>

                
            </div>
              </div>

              <div>
              <div className='real_estate_div'>
                <div className='real_estate_content'>
                    <div className='bars_img'>
                        <img src={bars}></img>
                    </div>

                    <div style={{padding:'0px 40px'}}>
                        <h1 className='real-head'>REAL</h1>
                        <h1 className='estate-head'>ESTATE</h1>
                        <p className='estate-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <div className='real-estate-icons-div-wrapper'>
                    <div className='social-icons-img-div'>
                    <i className="fa-brands fa-instagram "></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>

                <div className='real-estate-contact-icons-div'>
                    <div className='real-estate-contact-wrapper'>
                        <i class="fa-solid fa-phone"></i>
                        <p>00 54 8 352 587994</p>
                    </div>

                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-globe"></i>
                        <p>www.yourweb.com</p>
                    </div>
                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-envelope"></i>
                        <p>yourcompany@gmail.com</p>
                    </div>
                </div>
                    </div>

                </div>
                <div className='real_estate_img_div'>
                    <img src={rectangle}></img>
                </div>

                
            </div>
              </div>

              <div>
              <div className='real_estate_div'>
                <div className='real_estate_content'>
                    <div className='bars_img'>
                        <img src={bars}></img>
                    </div>

                    <div style={{padding:'0px 40px'}}>
                        <h1 className='real-head'>REAL</h1>
                        <h1 className='estate-head'>ESTATE</h1>
                        <p className='estate-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        <div className='real-estate-icons-div-wrapper'>
                    <div className='social-icons-img-div'>
                    <i className="fa-brands fa-instagram "></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='social-icons-img-div'>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>

                <div className='real-estate-contact-icons-div'>
                    <div className='real-estate-contact-wrapper'>
                        <i class="fa-solid fa-phone"></i>
                        <p>00 54 8 352 587994</p>
                    </div>

                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-globe"></i>
                        <p>www.yourweb.com</p>
                    </div>
                    <div className='real-estate-contact-wrapper'>
                    <i class="fa-solid fa-envelope"></i>
                        <p>yourcompany@gmail.com</p>
                    </div>
                </div>
                    </div>

                </div>
                <div className='real_estate_img_div'>
                    <img src={rectangle}></img>
                </div>

                
            </div>
              </div>
        </Slider>

            <WinnersHomeCities/>
            <WinnersPropertyDealers/>
            <WinnersAbout/>
            <PreferedCity/>
            <Apartments/>
        </div>
    </div>
   </div>
  )
}

export default WinnersHome
