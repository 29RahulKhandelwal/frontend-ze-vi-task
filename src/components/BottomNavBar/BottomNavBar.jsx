import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import classes from "./BottomNavBar.module.css";
import CartButton from './CartButton';
import CartDetails from './CartDetails';
import ContinueBtn from './ContinueBtn';
import Login from './Login';
import LoginBtn from './LoginBtn';

const BottomNavBar = () => {
  const [isClicked,setIsClicked]=useState(false);
  const [isLogin,setIsLogin]=useState(false);

  const loggedIn=useSelector((state)=>state.loggedInReducer.loggedInData)
  

  function handleClick(clicked){
    setIsClicked(clicked)
  }
  function handleLogin(cont){
    setIsLogin(cont)
  }
  function handleBack(back){
    setIsLogin(back)
  }
  return (
    <>
      {!isLogin && <div className={isClicked && classes.backdrop}>
          <CartDetails clicked={isClicked} />
          <div className={classes.bottomNavbar}>
              <CartButton clicked={handleClick} />
              {loggedIn ? <ContinueBtn /> : <LoginBtn login={handleLogin} />}
          </div>
      </div>}
      {isLogin && <Login onBack={handleBack} />}
    </>
  )
}

export default BottomNavBar