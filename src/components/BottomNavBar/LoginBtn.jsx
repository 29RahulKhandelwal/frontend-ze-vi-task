import React, { useState } from 'react'
import classes from "./LoginBtn.module.css";

const LoginBtn = (props) => {
  const [isClicked,setIsClicked]=useState(false);
  function handleClick(event){
    setIsClicked(true)
    event.preventDefault();
  }
  props.login(isClicked)
  return (
    <div className={classes.login}>
        <button className={classes.loginBtn} onClick={handleClick}>
            Login <i class={`fa-solid fa-lg fa-arrow-right ${classes.rightarrow}`}></i>
        </button>
    </div>
  )
}

export default LoginBtn