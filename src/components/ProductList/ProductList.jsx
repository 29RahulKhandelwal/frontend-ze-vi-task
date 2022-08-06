import React from 'react'
import AddQuantityIncrementDecrementBtn from './AddQuantityIncrementDecrementBtn';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import classes from "./ProductList.module.css";

const ProductList = (props) => {
    const {data}=props;
  return (
    <div className={classes.productlist}>
        <div className={classes.left}>
            <Image data={data} />
        </div>
        <div className={classes.right}>
            <Name data={data} />
            <Description data={data} />
            <div className={classes.priceadd}>
                <Price data={data} />
                <AddQuantityIncrementDecrementBtn data={data}/>
            </div>
        </div>
    </div>
  )
}

export default ProductList