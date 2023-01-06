import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import LatestTrends from './LatestTrends'
import SearchBar from '../UI/SearchBar'
import "./Home.scss";

const Home = () => {
    const [isSearchClicked,setIsSearchClicked]=useState()
    function handleSearchClick(click){
        setIsSearchClicked(click)
    }
    
    return (
    <div className='main'>
      <img src={logo} className="logo" alt="logo" />
      <div className="inner">
        <SearchBar searchClick={handleSearchClick} />
        {isSearchClicked && <LatestTrends />}
      </div>
    </div>
  )
}

export default Home