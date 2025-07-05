import React from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet'

function App() {


  return (
    <>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
      <div className='flex flex-col min-h-screen'>
        <Navber></Navber>
      <ScrollToTop></ScrollToTop>
      <main className='flex-grow'>
        <Outlet></Outlet>
      </main>
      
      <Footer></Footer>
      </div>
      

    </>
  )
}

export default App
