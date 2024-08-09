import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footers } from './Footer/Footers'
import { Header } from './Header/Header'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footers/>
    </>
  )
}

export default Layout