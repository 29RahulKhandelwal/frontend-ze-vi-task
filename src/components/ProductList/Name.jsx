import React from 'react'
import classes from "./Name.module.css";

const Name = (props) => {
  const {data}=props;
  return (
    <h4 className={classes.name}>{data.foodName}</h4>
  )
}

export default Name