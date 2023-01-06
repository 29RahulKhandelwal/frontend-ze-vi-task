import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const [isClicked,setIsClicked]=useState(false);
  function handleClick(){
    setIsClicked(true)
  }
  props.searchClick(isClicked);
  return (
    <div className='searchbar'>
        <input type="search" name="search" className='search' placeholder='Search' onClick={handleClick} autoComplete="off" />
        <Link to="/product" className='linkProduct'>
          <i class="fa-solid fa-lg fa-magnifying-glass searchicon"></i>
        </Link>
    </div>
  )
}

export default SearchBar