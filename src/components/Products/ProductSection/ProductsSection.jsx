import React from 'react'
import ProductCard from './ProductCard'
import "./ProductSection.scss"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductsSection = () => {
  const productsData=useSelector((state)=>state.product.ProductData);
  const [products,setProduct]=useState()
  
  const Brand=useSelector((state)=>state.filter.Brand);
  const Price=useSelector((state)=>state.filter.Price);
  const Rating=useSelector((state)=>state.filter.Rating);

  useEffect(()=>{
    setProduct(productsData)
    if(Brand.length>0 || Price.length>0 || Rating.length>0){
      let newProductData=productsData.filter(data=>{
        if(Brand.length>0 && Price.length===0 && Rating.length===0){
          return Brand.includes(data.brandName)
        }

        if(Brand.length===0 && Price.length>0 && Rating.length===0){
          if(Price.includes("500")){
            return data.discountedPrice<=500
          }else if(Price.includes("1000-3000")){
            return data.discountedPrice>=1000 && data.discountedPrice<=3000
          }else{
            return data.discountedPrice>=0
          }
        }

        if(Brand.length===0 && Price.length===0 && Rating.length>0){
          return Rating.includes(data.rating)
        }

        if(Brand.length>0 && Price.length===0 && Rating.length>0){
          return Brand.includes(data.brandName) && Rating.includes(data.rating)
        }

        if(Brand.length>0 && Price.length>0 && Rating.length===0){
          if(Price.includes("500")){
            return data.discountedPrice<=500 && Brand.includes(data.brandName)
          }else if(Price.includes("1000-3000")){
            return data.discountedPrice>=1000 && data.discountedPrice<=3000 && Brand.includes(data.brandName)
          }else{
            return data.discountedPrice>=0 && Brand.includes(data.brandName)
          }
        }
        
        if(Brand.length===0 && Price.length>0 && Rating.length>0){
          if(Price.includes("500")){
            return data.discountedPrice<=500 && Rating.includes(data.rating)
          }else if(Price.includes("1000-3000")){
            return data.discountedPrice>=1000 && data.discountedPrice<=3000 && Rating.includes(data.rating)
          }else{
            return data.discountedPrice>=0 && Rating.includes(data.rating)
          }
        }

        if(Brand.length>0 && Price.length>0 && Rating.length>0){
          if(Price.includes("500")){
            return data.discountedPrice<=500 && Rating.includes(data.rating) && Brand.includes(data.brandName)
          }else if(Price.includes("1000-3000")){
            return data.discountedPrice>=1000 && data.discountedPrice<=3000 && Rating.includes(data.rating) && Brand.includes(data.brandName)
          }else{
            return data.discountedPrice>=0 && Rating.includes(data.rating) && Brand.includes(data.brandName)
          }
        }

      })
      setProduct(newProductData)
    }else{
      setProduct(productsData)
    }
  },[Brand,Price,Rating,productsData])

  return (
    <div className='productsSection'>
      {products && products.map(productData=>{
        return (
          <ProductCard product={productData} />
        )
      })}
    </div>
  )
}

export default ProductsSection