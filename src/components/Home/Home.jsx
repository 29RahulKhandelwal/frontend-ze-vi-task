import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import LatestTrends from './LatestTrends'
import SearchBar from '../UI/SearchBar'
import "./Home.scss";
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../store/search-slice';

const Home = () => {
    const isSearchClicked=useSelector((state)=>state.search.isSearchClicked);
    
    return (
    <div className='main'>
      <img src={logo} className="logo" alt="logo" />
      <div className="inner">
        <SearchBar />
        {isSearchClicked && <LatestTrends />}
      </div>
    </div>
  )
}

export default Home