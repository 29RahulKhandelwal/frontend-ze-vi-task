import React from 'react'
import classes from "./Image.module.css"

const Image = (props) => {
  const {data}=props;
  return (
    <img className={classes.img} src={data.imgUrl} alt="food-img" />
  )
}

export default Image