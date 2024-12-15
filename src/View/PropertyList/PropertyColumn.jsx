import React from 'react'
import PropertyTable from './PropertyTable'
import plus from '../../Images/Vector@2x.png'
import './PropertyList.css'
const PropertyColumn = () => {
  return (
    <>
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
    </>
  )
}

export default PropertyColumn
