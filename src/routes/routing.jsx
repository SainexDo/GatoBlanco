import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Crud from '../pages/crud'
import Home from '../pages/home'


const routing = () => {
  return (
    <>
    <Routes>
        <Route path='/crud' element={<Crud/>} />
        <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default routing