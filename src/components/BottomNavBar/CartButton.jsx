import React, { useState } from 'react'
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const [isclick,setIsClick]=useState(false);

    function handleClick(event){
        setIsClick(!isclick)
        event.preventDefault();
    }
    props.clicked(isclick)
  return (
    <div className={classes.cartButton}>
        <div className={classes.btn}>
            1 Item(s)<br />Total Rs. 1
        <button className={classes.arrowbtn} onClick={handleClick}><i class={isclick ? `fa-solid fa-xsm fa-angle-down ${classes.arrowup}` : `fa-solid fa-xsm fa-angle-up ${classes.arrowup}`}></i></button>
        </div>
    </div>
  )
}

export default CartButton