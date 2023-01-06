import React from 'react'
import {Link} from "react-router-dom";
import "./SearchBar.scss";
import { useDispatch } from 'react-redux';
import { searchAction } from '../../store/search-slice';

const SearchBar = (props) => {
  const dispatch=useDispatch();
  function handleClick(){
    dispatch(searchAction.toggle());
  }
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