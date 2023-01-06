import React, { useEffect } from 'react'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import "./Brand.scss"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../../store/filter-slice'

const Brand = () => {
    const dispatch=useDispatch();
    const [isToggle,setIsToggle]=useState(false);
    const [brandType,setBrandType]=useState([]);
    function handleBrandType(brand){
        if(brandType.includes(brand)){
            setBrandType(brandType.filter(ebrand=>ebrand!==brand))
        }else{
            setBrandType((prevData=>{
                return [...prevData,brand]
            }))
        }
    }
    function handleToggle(){
        setIsToggle(!isToggle)
    }

    useEffect(()=>{
        dispatch(filterAction.BrandFilter(brandType))
    },[brandType,dispatch])

    return (
        <div className='brand'>
            <div className="heading">
                <h4 className='filter-name'>BRAND</h4>
                {isToggle ? <AiOutlineUp size={15} onClick={handleToggle} className="updownArrow" /> : <AiOutlineDown size={15} onClick={handleToggle} className="updownArrow" />}
            </div>
            {!isToggle && <section className="checkbox">
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="Mango" onClick={e => handleBrandType("Mango")} /> Mango
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="H&M" onClick={e => handleBrandType("H&M")} /> H&M
                </label>
            </section>}
        </div>
    )
}

export default Brand