import React from 'react'
import SearchProducts from '../UI/SearchProducts'
import logo from "../../assets/logo.png"
import Filter from './Filter/Filter'
import "./Products.scss"
import ProductsSection from './ProductSection/ProductsSection'

const Products = () => {
  return (
    <div className='products'>
      <SearchProducts />
      <img src={logo} className="logo" alt="logo" />
      <div className="products-main">
        <Filter />
        <ProductsSection />
      </div>
    </div>
  )
}

export default Products