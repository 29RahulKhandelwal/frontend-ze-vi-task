import React from 'react'
import classes from "./Description.module.css"

const Description = (props) => {
  const {data}=props;
  return (
    <p className={classes.description}>{data.foodDescription}</p>
  )
}

export default Description