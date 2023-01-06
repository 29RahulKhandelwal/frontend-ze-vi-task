import React from 'react'
import "./LatestTrends.scss";
import PopularSuggestions from './PopularSuggestions';

const LatestTrends = (props) => {
  return (
    <div className='latest'>
        <h3 className='latestTitle'>Latest Trends</h3>
        <div className='product'>
            <img className='productImg' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p className='productName'>Title</p>
        </div>
        <div className='product'>
            <img className='productImg' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p className='productName'>Title</p>
        </div>
        <div className='product'>
            <img className='productImg' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p className='productName'>Title</p>
        </div>
        <div className='product'>
            <img className='productImg' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p className='productName'>Title</p>
        </div>
        <div className='product'>
            <img className='productImg' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p className='productName'>Title</p>
        </div>
        <PopularSuggestions />
    </div>
  )
}

export default LatestTrends