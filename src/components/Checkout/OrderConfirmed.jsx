import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./OrderConfirmed.module.css"

const OrderConfirmed = () => {
  return (
    <div className={classes.main}>        
        <h3>Order Confirmed</h3>
        <Link to ="/" className={classes.backHome}>Back to main page</Link>
    </div>
  )
}

export default OrderConfirmed