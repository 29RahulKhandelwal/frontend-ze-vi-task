import React from 'react'
import Home from './components/Home/Home'
import {Routes,Route} from "react-router-dom"
import Product from './components/Products/Products'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Product />} />
    </Routes>
  )
}

export default App