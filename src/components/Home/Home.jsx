import React, { useEffect } from 'react'
import logo from "../../assets/logo.png"
import LatestTrends from './LatestTrends'
import SearchBar from '../UI/SearchBar'
import "./Home.scss";
import { useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [trends,setTrends]=useState([]);
    const [suggestions,setSuggestions]=useState([]);
    const isSearchClicked=useSelector((state)=>state.search.isSearchClicked);

    useEffect(()=>{
      const getTrends=()=>{
        const newtrends=[];
        for(let i=0;i<5;i++){
          const imgUrl=faker.image.fashion(180,240,true);
          const name=faker.commerce.productName();
          newtrends.push({id:i,imgUrl,name});
        }
        setTrends(newtrends)
      }
      const getSuggestions=()=>{
        const newsuggestions=[];
        for(let i=0;i<5;i++){
          const suggestion=faker.commerce.productName();
          newsuggestions.push(suggestion)
        }
        setSuggestions(newsuggestions)
      }
      getTrends();
      getSuggestions();
    },[])
    
    return (
    <div className='main'>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="inner">
        <SearchBar />
        {isSearchClicked && <LatestTrends trends={trends} suggestions={suggestions} />}
      </div>
    </div>
  )
}

export default Home