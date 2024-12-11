import React from 'react'
import './WinnersHome.css'
import image from '../../Images/Rectangle 34624315.png'
import smile from '../../Images/fi_122187.png'
import house from '../../Images/fi_17862451.png'
import handshake from '../../Images/fi_9091860.png'
import img1 from '../../Images/Rectangle 34624313.png'
import img2  from '../../Images/Rectangle 34624316.png'
import img3 from '../../Images/Rectangle 34624317.png'
import img4 from '../../Images/Rectangle 34624318.png'
const WinnersAbout = () => {
    return (
        <>
            <div className='winners_about_container'>
                <div className='winners_about_wrapper'>
                    <div className='winners_about_img_wrapper'>
                       <div className='winners_about_img_div'>
                       <img  src={image}></img>
                       </div>
                          
                        
                    </div>
                    <div className='winners_about_content_wrapper'>
                        <div className='winners_about_head_div'>
                            <p className='about_winners_para_head'>About Winners</p>
                            <p className='about_winners_para'>Lorem Ipsum placeholder text for use in your graphic,
                                print and web layouts, and discover plugins for your favorite writing, design and blogging tools.
                                Explore the origins, history and meaning of the famous passage
                                Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
                                and discover plugins for your favorite writing, design and blogging tools.
                                Explore the origins, history and meaning of the famous passage</p>
                        </div>
                        <div className='winners_about_achievements_wrapper'>
                            <div className='winners_about_achievements'>
                                <div className='winners_about_logo_div'>
                                    <img src={smile}></img>
                                   
                                </div>
                                <div>
                                        <p className='about_numbers_para'>30k</p>
                                        <p className='about_customers_para'>Happy Customers</p>
                                    </div>
                            </div>
                            <div className='winners_about_achievements'>
                                <div className='winners_about_logo_div'>
                                    <img src={house}></img>
                                   
                                </div>
                                <div>
                                        <p className='about_numbers_para'>20k</p>
                                        <p className='about_customers_para_2'>Property Sold</p>
                                    </div>
                            </div>
                            <div className='winners_about_achievements'>
                                <div className='winners_about_logo_div'>
                                    <img src={handshake}></img>
                                   
                                </div>
                                <div>
                                        <p className='about_numbers_para'>35+</p>
                                        <p className='about_customers_para_2'>Property Dealer</p>
                                    </div>
                            </div>
                        </div>

                        <div className='winners_about_small_img_div'>
                        {[img1,img2,img3,img4,].map((e,i)=>{
                            return(
                                <>
                                <div className='small_about_img'>
                                <img src={e}></img>
                            </div>
                                </>
                            )
                        })}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinnersAbout
