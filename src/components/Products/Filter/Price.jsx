import React, { useEffect } from 'react'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import "./Brand.scss"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../../store/filter-slice'

const Price = () => {
    const dispatch=useDispatch();
    const [isToggle,setIsToggle]=useState(false);
    const [priceType,setPriceType]=useState([]);
    function handlePriceType(price){
        if(priceType.includes(price)){
            setPriceType(priceType.filter(eprice=>eprice!==price))
        }else{
            setPriceType((prevData=>{
                return [...prevData,price]
            }))
        }
    }
    function handleToggle(){
        setIsToggle(!isToggle)
    }

    useEffect(()=>{
        dispatch(filterAction.PriceFilter(priceType))
    },[priceType,dispatch])

    return (
        <div className='price'>
            <div className="heading">
                <h4 className='filter-name'>PRICE RANGE</h4>
                {isToggle ? <AiOutlineUp size={15} onClick={handleToggle} className="updownArrow" /> : <AiOutlineDown size={15} onClick={handleToggle} className="updownArrow" />}
            </div>
            {!isToggle && <section className="checkbox">
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="500" onClick={e => handlePriceType("500")} /> Under 500
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="1000-3000" onClick={e => handlePriceType("1000-3000")} /> 1000 To 3000
                </label>
            </section>}
        </div>
    )
}

export default Price