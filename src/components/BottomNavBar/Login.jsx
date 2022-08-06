import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { LoggedInAction } from '../../actions';
import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch=useDispatch();
  const [isClicked,setIsClicked]=useState(true);
  const [onSubmit,setOnSubmit]=useState(false);
  const [onOtpSubmit,setOnOtpSubmit]=useState(false);
  function handleClick(event){
    setIsClicked(false)
    event.preventDefault();
  }
  props.onBack(isClicked)
  function handleSubmit(event){
    setOnSubmit(true);
    event.preventDefault();
  }
  function handleBack(){
    setOnSubmit(false);
  }
  function handleSubmitotp(){
    setOnOtpSubmit(true)
    setIsClicked(false)
  }

  useEffect(()=>{
    dispatch(LoggedInAction(onOtpSubmit))
  },[onOtpSubmit,dispatch])

  return (
    <div className={classes.backdrop}>
      {!onSubmit && <div className={classes.login}>
        <div className={classes.heading}>
          <i class={`fa-solid fa-2x fa-arrow-left-long ${classes.back}`} onClick={handleClick}></i>
          <p className={classes.headingName}>Login</p>
        </div>
        <div className={classes.loginSection}>
          <input type="text" className={classes.phnInp} name="phn" placeholder='Enter your phone nunber' />
          <button className={classes.submitBtn} onClick={handleSubmit}>Submit</button>
          <a className={classes.anchorTag} onClick={handleClick}>Will do it later</a>
        </div>
      </div>}
      {onSubmit && <div className={classes.otp}>
        <div className={classes.heading}>
          <i class={`fa-solid fa-2x fa-arrow-left-long ${classes.back}`} onClick={handleBack}></i>
          <p className={classes.headingName}>OTP</p>
        </div>
        <div className={classes.loginSection}>
          <input type="text" className={classes.phnInp} name="otp" value="359" disabled />
          <button className={classes.submitBtn} onClick={handleSubmitotp}>Submit</button>
          <a className={classes.anchorTag} onClick={handleClick}>Will do it later</a>
        </div>
      </div>}
    </div>
  )
}

export default Login