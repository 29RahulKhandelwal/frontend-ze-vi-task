import React from 'react'
import "./Filter.scss"
import Brand from './Brand'
import Price from './Price'
import Rating from './Rating'

const Filter = () => {
  return (
    <div className='filter'>
        <h1 className='search-results'>Search Results</h1>
        <div className='filters'>
          <Brand />
          <Price />
          <Rating />
        </div>
    </div>
  )
}

export default Filter