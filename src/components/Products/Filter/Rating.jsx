import React, { useEffect } from 'react'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import "./Brand.scss"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAction } from '../../../store/filter-slice'
import FiveStar from '../Star/FiveStar'
import FourStar from '../Star/FourStar'
import ThreeStar from '../Star/ThreeStar'
import TwoStar from '../Star/TwoStar'
import OneStar from '../Star/OneStar'

const Rating = () => {
    const dispatch=useDispatch();
    const [isToggle,setIsToggle]=useState(false);
    const [rating,setRating]=useState([]);
    function handleRating(SelectedRating){
        if(rating.includes(SelectedRating)){
            setRating(rating.filter(erating=>erating!==SelectedRating))
        }else{
            setRating((prevData=>{
                return [...prevData,SelectedRating]
            }))
        }
    }
    function handleToggle(){
        setIsToggle(!isToggle)
    }

    useEffect(()=>{
        dispatch(filterAction.RatingFilter(rating))
    },[rating,dispatch])

    console.log(useSelector((state)=>state.filter.Rating))

    return (
        <div className='brand'>
            <div className="heading">
                <h4 className='filter-name'>RATINGS</h4>
                {isToggle ? <AiOutlineUp size={15} onClick={handleToggle} className="updownArrow" /> : <AiOutlineDown size={15} onClick={handleToggle} className="updownArrow" />}
            </div>
            {!isToggle && <section className="checkbox">
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="five" onClick={e => handleRating("five")} /> <FiveStar />
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="four" onClick={e => handleRating("four")} /> <FourStar />
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="Three" onClick={e => handleRating("Three")} /> <ThreeStar />
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="Two" onClick={e => handleRating("Two")} /> <TwoStar />
                </label>
                <label className='checkbox-title'>
                    <input className='check' type="checkbox" name="checkbox" value="One" onClick={e => handleRating("One")} /> <OneStar />
                </label>
            </section>}
        </div>
    )
}

export default Rating