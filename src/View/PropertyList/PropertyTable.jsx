import React from 'react'
import TabelData from './TableData'
import PropertyDisplay from './PropertyDisplay'
import './PropertyList.css'
const PropertyTable = () => {
  return (
    <>
      {TabelData.map((ele,i)=>{
        return (
            <PropertyDisplay e={ele} key={i}/>
        )
      })}
    </>
  )
}

export default PropertyTable
