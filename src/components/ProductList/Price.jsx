import React from 'react'
import classes from "./Price.module.css"

const Price = (props) => {
  const {data}=props;
  return (
    <p className={classes.currentprice}>₹ {data.currentPrice} <span className={classes.orignalprice}>₹ {data.orignalPrice}</span></p>
  )
}

export default Price