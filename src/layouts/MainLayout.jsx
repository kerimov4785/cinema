import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Header />
      <main className='bg-neutral-700'>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout