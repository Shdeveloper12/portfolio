import React from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
      
      <Navber></Navber>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
