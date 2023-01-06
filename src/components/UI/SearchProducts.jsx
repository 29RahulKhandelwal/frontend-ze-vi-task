import React from 'react'
import "./SearchProducts.scss"

const SearchProducts = () => {
  return (
    <div className='searchProducts'>
        <input type="search" name="search" className='searchProduct' placeholder='Search' autoComplete="off" />
        <i class="fa-solid fa-lg fa-magnifying-glass searchProductIcon"></i>
    </div>
  )
}

export default SearchProducts