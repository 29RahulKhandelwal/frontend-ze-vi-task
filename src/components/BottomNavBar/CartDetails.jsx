import React from 'react'
import AddQuantityIncrementDecrementBtn from '../ProductList/AddQuantityIncrementDecrementBtn'
import classes from "./CartDetails.module.css"

const CartDetails = (props) => {
  return (
    <>
      {props.clicked && <div className={classes.cartdetails}>
        <div className={classes.title}>
          <h4 className={classes.cartHeading}>Cart Details</h4>
          <i class={`fa-solid fa-lg fa-xmark ${classes.cross}`}></i>
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
      </div>}
    </>
  )
}

export default CartDetails