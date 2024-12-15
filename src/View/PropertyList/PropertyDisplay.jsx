import React, { useState } from 'react'
import whatsapp from '../../Images/Group 534.png'
import arrow2 from '../../Images/Vector (11).png'
import heart from '../../Images/Vector (10).png'
import './PropertyList.css'
const PropertyDisplay = ({ e }) => {
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(null)
    const showFunc = () => {
        setShow(!show)
        setIndex(e.id)
    }
    return (
        <>
            <tr className={show && "borderClass"} onClick={(() => { showFunc(e.id) })}>
                <td>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: '10px' }}>
                        <p className='table_data_para'>{e.locality}</p>
                        <img style={{ cursor: 'pointer' }} onClick={(() => { setShow(!show) })} src={e.arrow}></img>
                    </div>
                </td>

                <td><p className='table_data_para' >{e.address}</p></td>
                <td><p className='table_data_para'>{e.area}</p></td>
                <td><p className='table_data_para'>{e.flat}</p></td>
                <td><p className='table_data_para'>{e.bhk}</p></td>
                <td>
                    <div className='plus_div'>
                        <img style={{ cursor: 'pointer' }} src={e.img}></img>
                    </div>
                </td>
            </tr>

            {show && <>
                <tr style={{ borderLeft: '4px solid rgb(1, 51, 102)' }}>
                    <td colSpan={6}>
                        <tr>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Property Type:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Bathroom:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Owner Name:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Contact:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Age:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Price:
                            </td>
                            <td className='table_inside_data' style={{ border: 'none !important' }}>
                                Extra:
                            </td>
                        </tr>
                        <tr>
                            <td className='table_data_1'>{e.details.propertyType}</td>
                            <td className='table_data_1'>{e.details.bathroom}</td>
                            <td className='table_data_1'>{e.details.ownerName}</td>
                            <td className='table_data_1'>{e.details.contact}</td>
                            <td className='table_data_1'>{e.details.age}</td>
                            <td className='table_data_1'>{e.details.price}</td>
                            <td className='table_data_1'>{e.details.extra}</td>
                        </tr>

                        <tr>
                            <td className='table_data50' colSpan={3} >
                                <div style={{ display: "flex", columnGap: '15px', marginTop: '12px' }}>
                                    <td className='table_data50'>
                                        <div className='table_inside_data_div'>
                                            <div className='table_div_check'></div>
                                            <p>Report this property</p>
                                        </div>
                                    </td>

                                    <td className='table_data50'>
                                        <div className='table_inside_data_div'>
                                            <div className='table_div_check'></div>
                                            <p>Sold Out</p>
                                        </div>
                                    </td>

                                    <td className='table_data50'>
                                        <div className='table_inside_data_div'>
                                            <div className='table_div_check'></div>
                                            <p>Rent Out</p>
                                        </div>
                                    </td>
                                </div>
                            </td>







                        </tr>

                        <tr>
                            <td className='table_data50' colSpan={6}>
                                <div style={{ marginTop: '10px', marginBottom: '15px' }}>
                                    <p className='para_remark'>Remark</p>
                                    <div className='remark_div'>
                                        <input type='text' placeholder='Type something for your own use... '></input>
                                        <button>Submit</button>
                                        <div className='table_data_icons_wrapper'>
                                            <div className='table_icons'>
                                                <img src={heart}></img>
                                            </div>
                                            <div className='table_icons'>
                                                <img src={whatsapp}></img>
                                            </div>
                                            <div className='table_icons'>
                                                <img src={arrow2}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </td>

                </tr>
            </>}
        </>
    )
}

export default PropertyDisplay
