import React from 'react'
import './PropertyList.css'
import column from '../../Images/Vector (9).png'
import grid from '../../Images/Group 1171279337.png'
import dropdown from '../../Images/Vector (8).png'
import { useState } from 'react'
import plus from '../../Images/Vector@2x.png'

import PropertyTable from './PropertyTable'
const PropertyList = () => {
  const [progress, setProgress] = useState(0);
  const [index, SetIndex] = useState()
  const handleInputChange = (event) => {
    const value = event.target.value;
    setProgress(value);
  };
  return (
    <>
      <div className='uni_wrapper'>
        <div className='uni_container'>
          <div className='property_list_screen_div'>
            <div className='coulmn_row_div_wrapper'>
              <div className='column_row_div'>
                <div className='column_div'>
                  <img src={column}></img>
                </div>
                <div className='row_div'>
                  <img style={{ width: '100%', maxWidth: '85%', minWidth: '85%' }} src={grid}></img>
                </div>
              </div>
            </div>

            <div className='property_list_div_wrapper'>
              <div className='property_list_div'>
                <div className='tabel_wrapper'>
                  <table>
                    <thead>
                      <tr>
                        <th className='table_head_1'>Locality</th>
                        <th className='table_head_2'>Address</th>
                        <th className='table_head_3'>Area</th>
                        <th className='table_head_4'>Flat</th>
                        <th className='table_head_5'>BHK</th>
                        <th className='table_head_6'>
                          <div className='plus_div'>
                            <img style={{ cursor: 'pointer' }} src={plus}></img>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>


                      <PropertyTable />






                    </tbody>
                  </table>
                </div>

              </div>
              <div className='filter_property_div'>
                <div className='filter_div_head'>
                  <p className='filter_by_para'>Filter by</p>
                  <p className='clear_all_para'>Clear All</p>
                </div>
                <div className='property_filter_form_wrapper'>
                  <form>
                    <div className='form_field_property'>
                      <label className='filter_property_label'>Property Type</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>


                    <div className='form_field_property'>
                      <label className='filter_property_label'>Locality</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>


                    <div className='form_field_property'>
                      <label className='filter_property_label'>Area</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>



                    <div className='form_field_property'>
                      <label className='filter_property_label'>BHK</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>

                    <div className='form_field_property'>
                      <label className='filter_property_label'>Address</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>



                    <div className='form_field_property'>
                      <label className='filter_property_label'>Floor</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>


                    <div className='form_field_property'>
                      <label className='filter_property_label'>Feature</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>


                    <div className='form_field_property'>
                      <label className='filter_property_label'>Price</label>
                      <div className='filter_input_div'>
                        <input
                          type="range"
                          className="progress"
                          value={progress}
                          onChange={handleInputChange}
                          style={{
                            marginTop: '10px',
                            background: `linear-gradient(to right, rgba(0, 51, 102, 1) 0%, rgba(0, 51, 102, 1) ${progress}%, rgb(231, 231, 231) ${progress}%,rgb(231, 231, 231) 100%)`
                          }} />
                        <div className='input_range_values'>
                          <p>10 lakh</p>
                          <p>30 lakh</p>
                          <p>50 lakh</p>
                        </div>
                      </div>
                    </div>




                    <div className='form_field_property'>
                      <label className='filter_property_label'>Facing</label>
                      <div className='filter_input_div'>
                        <input className='filter_input' placeholder='Select an option'></input>
                        <img src={dropdown}></img>
                      </div>
                    </div>

                    <div className='form_field_property'>
                      <button className='apply_btn'>Apply</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyList
