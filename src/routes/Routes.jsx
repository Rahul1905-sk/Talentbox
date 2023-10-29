import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignInPage from '../pages/SignInPage'
import ProductPage from '../pages/ProductPage'
 
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='/signin' element={<SignInPage />}  />
        <Route path='/learn' element={<ProductPage />}  />
        <Route path='*' element={<h1>404 not found</h1>}  />
    </Routes>
  )
}

export default AllRoutes