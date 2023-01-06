import React from 'react'
import "./LatestTrends.scss";
import PopularSuggestions from './PopularSuggestions';

const LatestTrends = (props) => {
    const {trends, suggestions}=props;
  return (
    <div className='latest'>
        <h3 className='latestTitle'>Latest Trends</h3>
        <div className="trends">
            {trends.map(trend=>{
                return (
                    <div className='product' key={trend.id}>
                        <img className='productImg' src={trend.imgUrl} alt={trend.name+"-img"} />
                        <p className='productName'>{trend.name}</p>
                    </div>
                )
            })}
        </div>
        <PopularSuggestions suggestions={suggestions} />
    </div>
  )
}

export default LatestTrends