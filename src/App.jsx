import React, { lazy, Suspense } from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet'

// Lazy load heavy components
const Footer = lazy(() => import('./components/Footer'))
const FluidSmoke = lazy(() => import('./components/FluidSmoke'))

function App() {


  return (
    <>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
      <div className='flex flex-col min-h-screen'>
        <Navber></Navber>
      <ScrollToTop></ScrollToTop>
      <Suspense fallback={<div className="w-full h-full"></div>}>
        <FluidSmoke></FluidSmoke>
      </Suspense>
      <main className='flex-grow'>
        <Outlet></Outlet>
      </main>
      
      <Suspense fallback={<div className="py-4"></div>}>
        <Footer></Footer>
      </Suspense>
      </div>
      

    </>
  )
}

export default App
