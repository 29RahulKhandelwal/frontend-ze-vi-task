import React, { useEffect, useState } from 'react'
import classes from "./AddQuantityIncrementDecrementBtn.module.css"

const AddQuantityIncrementDecrementBtn = () => {
  const [count,setCount]=useState(0);
  const [isCount,setIsCount]=useState(false);

  function handleDec(){
    setCount(count-1)
  }
  function handleInc(){
    setCount(count+1)
  }
  function handleAdd(){
    setIsCount(true)
    setCount(1)
  }
  useEffect(()=>{
    if(count<1){
      setIsCount(false)
    }
  },[count])

  return (
    <>
      {!isCount && <button className={classes.AddQuantity} onClick={handleAdd}>ADD</button>}

      {isCount && <div className={classes.IncrementDecrementBtn}>
        <button className={classes.decbtn} onClick={handleDec}>-</button>
        {count}
        <button className={classes.incbtn} onClick={handleInc}>+</button>
      </div>}
    </>
  )
}

export default AddQuantityIncrementDecrementBtn