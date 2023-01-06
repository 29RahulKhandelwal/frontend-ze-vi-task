import React from 'react'
import FiveStar from '../Star/FiveStar'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState } from 'react'
import OneStar from '../Star/OneStar'
import TwoStar from '../Star/TwoStar'
import ThreeStar from '../Star/ThreeStar'
import FourStar from '../Star/FourStar'

const ProductCard = (props) => {
  const [isHeartClicked,setIsHeartClicked]=useState(false);
  const [isViewShowing,setIsViewShowing]=useState(false);
  const {product}=props;
  function handleHeartClick(){
    setIsHeartClicked(!isHeartClicked);
  }
  function handleMouseOver(){
    setIsViewShowing(true);
  }
  function handleMouseOut(){
    setIsViewShowing(false);
  }
  return (
    <div className='productCard' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={product.id}>
      {isHeartClicked ? <AiFillHeart size={22} className="redHeart" onClick={handleHeartClick} /> : <AiOutlineHeart size={22} className="emptyHeart" onClick={handleHeartClick} />}
      <button className="viewProduct" style={{visibility:`${isViewShowing ? 'visible' : 'hidden'}`}}>View Product</button>
      <img className='productImage' src={product.imgUrl} alt={`${product.productName}+"-img"`} />
      <h4 className='productTitle'>{product.productName}</h4>
      <p className='orignalPrice'>Rs. {product.orignalPrice}</p>
      <p className='currentPrice'>Rs. {product.discountedPrice}</p>
      {(product.rating==="1" && <OneStar />) || (product.rating==="2" && <TwoStar />) || (product.rating==="3" && <ThreeStar />) || (product.rating==="4" && <FourStar />) || (product.rating==="5" && <FiveStar />)} <span className='nRating'>{(product.reviews)}</span>
    </div>
  )
}

export default ProductCard