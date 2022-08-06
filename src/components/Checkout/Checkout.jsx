import React from 'react'
import { Link } from "react-router-dom"
import classes from "./Checkout.module.css"
import AddQuantityIncrementDecrementBtn from '../ProductList/AddQuantityIncrementDecrementBtn'

const Checkout = () => {
  return (
    <div className={classes.cartdetails}>
        <div className={classes.main}>
          <Link to="/" className={classes.back}>
            <i class={`fa-solid fa-2x fa-arrow-left-long`}></i>
          </Link>
          <h4 className={classes.mainHeading}>Checkout</h4>
        </div>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>PICK UP</h4>
        </div>
        <div className={classes.pickupAddress}>
          Test<br/>Daalchini Office Noida Uttar Pradesh<br/>Order Expires within 30mins
        </div>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>CART DETAILS</h4>
        </div>
        <div className={classes.orderItems}>
          <div className={classes.heading}>
            <p className={classes.items}>Items</p>
            <p className={classes.qtys}>Quantity</p>
            <p className={classes.amounts}>Amount</p>
          </div>
          <div className={classes.data}>
            <p className={classes.item}>Rajma Chawal</p>
            <p className={classes.qty}>
              <AddQuantityIncrementDecrementBtn />
            </p>
            <p className={classes.amount}>Rs. 1</p>
          </div>
        </div>
        <div className={classes.orderTotal}>
          <p className={classes.total}>Total</p>
          <p className={classes.totalamt}>Rs. 1</p>
        </div>
        <div className={classes.bottomNavbar}>
          <Link to="/OrderConfirmed" className={classes.links}>
            <p className={classes.payment}>Select Payment</p>
            <i class={`fa-solid fa-2x fa-arrow-right-long ${classes.rightarrow}`}></i>
          </Link>
        </div>
      </div>
      
  )
}

export default Checkout