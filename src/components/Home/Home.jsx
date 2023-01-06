import React from 'react'
import logo from "../../assets/logo.png"
import LatestTrends from './LatestTrends'
import SearchBar from '../UI/SearchBar'
import "./Home.scss";
import { useSelector } from 'react-redux';

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