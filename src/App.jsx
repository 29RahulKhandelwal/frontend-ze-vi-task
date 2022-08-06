import React from 'react'
import { Routes, Route } from "react-router-dom";
import classes from './App.module.css';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import Checkout from './components/Checkout/Checkout';
import ProductList from './components/ProductList/ProductList';
import data from "./data";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<><div className={classes.main}>
        {data.map(data=>{
          return <div key={data.id} className={classes.products}>
            <ProductList data={data} />
          </div>
        })}
      </div>
      <BottomNavBar /></>} />
      <Route exact path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App