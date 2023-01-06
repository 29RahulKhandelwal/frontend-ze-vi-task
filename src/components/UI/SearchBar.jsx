import React from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import "./SearchBar.scss";
import { useDispatch } from 'react-redux';
import { searchAction } from '../../store/search-slice';

const SearchBar = (props) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function handleClick(){
    dispatch(searchAction.toggle());
  }
  function handleSearch(event){
    if (event.key === 'Enter') {
      navigate("/products")
    }
  }
  return (
    <div className='searchbar'>
        <input type="search" name="search" className='search' placeholder='Search' onClick={handleClick} autoComplete="off" onKeyDown={handleSearch} />
        <Link to="/products" className='linkProduct'>
          <i class="fa-solid fa-lg fa-magnifying-glass searchicon"></i>
        </Link>
    </div>
  )
}

export default SearchBar