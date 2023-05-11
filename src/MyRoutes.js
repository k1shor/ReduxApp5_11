import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Layout from './components/layout/Layout'
import Shipping from './components/pages/Shipping'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path = 'cart' element = {<Cart/>}/>
        <Route path='shipping' element = {<Shipping/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes