import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AdminLayout from './layouts/AdminLayout'
import Admin from './pages/Admin'
import Movie from './pages/Movie'
import Section from './pages/Section'
import Profil from './pages/Profil'
import SignIn from './pages/SignIn'
import RegisterLayout from './layouts/RegisterLayout'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='/movie/section/:theatreID/:movieID' element={<Section />} />
          <Route path='/profil' element={<Profil />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<Admin />} />
        </Route>
        <Route path='/register' element={<RegisterLayout />} >
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App