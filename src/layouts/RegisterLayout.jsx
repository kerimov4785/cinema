import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'

function RegisterLayout() {
    return (
        <>
            <Header />
            <main className='bg-neutral-700 h-[100vh]'>
                <Outlet />
            </main>
        </>
    )
}

export default RegisterLayout