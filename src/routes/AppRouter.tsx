import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/Login/Login'
import Dashboard from '../views/Dashboard/Dashboard'
import LandingPage from '../views/LandingPage/LandingPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter