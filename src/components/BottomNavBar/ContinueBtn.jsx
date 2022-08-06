import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./ContinueBtn.module.css";

const ContinueBtn = (props) => {
  return (
    <div className={classes.continue}>
      <Link to="/checkout">
        <button className={classes.continueBtn}>
            Continue <i class={`fa-solid fa-lg fa-arrow-right ${classes.rightarrow}`}></i>
        </button>
      </Link>
    </div>
  )
}

export default ContinueBtn