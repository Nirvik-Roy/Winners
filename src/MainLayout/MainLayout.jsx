import React from 'react'
import Header from '../Layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'

const MainLayout = () => {
  return (
    <>
   
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout
