import React from 'react'
import { useSelector } from "react-redux"
import classes from "./CartDetails.module.css"
import AddQuantityIncrementDecrementBtn from "../ProductList/AddQuantityIncrementDecrementBtn";

const CartDetails = (props) => {
  const orderData=useSelector((state)=>state.orderReducer.orderData)
  if(orderData[0]?.data?.count>0){
    console.log(orderData[0].data.foodName)
  }
  
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