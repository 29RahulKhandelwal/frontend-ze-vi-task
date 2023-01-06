import React from 'react'
import Star from './Star'

const TwoStar = () => {
  return (
    <div className='rating'>
        <Star class="rated" />
        <Star class="rated" />
        <Star class="unrated" />
        <Star class="unrated" />
        <Star class="unrated" />
    </div>
  )
}

export default TwoStar