import React from 'react'
import Star from './Star'

const FourStar = () => {
  return (
    <div className='rating'>
        <Star class="rated" />
        <Star class="rated" />
        <Star class="rated" />
        <Star class="rated" />
        <Star class="unrated" />
    </div>
  )
}

export default FourStar