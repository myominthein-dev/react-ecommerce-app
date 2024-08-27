import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './MainLayout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ProductCardDetail from './components/Product-card-detail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>

          <Route  path='/' element={<MainLayout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path="/product-detail/:cardId" element={<ProductDetail/>} />
          </Route>
      </Routes>
  </BrowserRouter>
)




