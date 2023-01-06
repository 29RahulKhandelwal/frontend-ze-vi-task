import React from 'react'
import SearchProducts from '../UI/SearchProducts'
import logo from "../../assets/logo.png"
import Filter from './Filter/Filter'
import "./Products.scss"
import ProductsSection from './ProductSection/ProductsSection'
import { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useDispatch } from 'react-redux'
import { productAction } from '../../store/products-slice'
import { Link } from 'react-router-dom'

const Products = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    const getProducts=()=>{
      const newproducts=[];
      for(let i=0;i<9;i++){
        let orignalPrice=faker.commerce.price(400,1200);
        let discountedPrice=parseInt(faker.commerce.price(200,Number(orignalPrice)));
        discountedPrice=discountedPrice.toString()

        newproducts.push({
          id:i,
          imgUrl:faker.image.people(300,400,true),
          productName:faker.commerce.productName(),
          brandName:'Mango',
          orignalPrice,
          discountedPrice,
          rating:Math.round(Math.random()*(5-1)+1).toString(),
          reviews:Math.floor(Math.random()*1000+1)
        })
      }
      for(let i=9;i<18;i++){
        let orignalPrice=faker.commerce.price(400,1200);
        let discountedPrice=parseInt(faker.commerce.price(200,Number(orignalPrice)));
        discountedPrice=discountedPrice.toString()

        newproducts.push({
          id:i,
          imgUrl:faker.image.people(300,400,true),
          productName:faker.commerce.productName(),
          brandName:'H&M',
          orignalPrice,
          discountedPrice,
          rating:Math.round(Math.random()*(5-1)+1).toString(),
          reviews:Math.floor(Math.random()*1000+1)
        })
      }
      dispatch(productAction.Products(newproducts))
    }
    getProducts();
  },[dispatch])

  return (
    <div className='products'>
      <SearchProducts />
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="products-section">
        <div className="products-main">
          <Filter />
          <ProductsSection />
        </div>
      </div>
    </div>
  )
}

export default Products