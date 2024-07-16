import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Loggin from '../pages/loggin'
import Register from '../pages/register'
import Crud from '../pages/crud'


const routing = () => {
  return (
    <>
    <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/loggin' element={<Loggin/>} />
        <Route path='/crud' element={<Crud/>} />
    </Routes>
    </>
  )
}

export default routing