import React from 'react'
import "./PopularSuggestions.scss"

const PopularSuggestions = (props) => {
  const {suggestions}=props;
  return (
    <div className='popularSuggestion'>
        <h3 className='popularSuggestionTitle'>Popular Suggestions</h3>
        {suggestions.map(suggestion=>{
          return <p className='suggestions'>{suggestion}</p>
        })}
    </div>
  )
}

export default PopularSuggestions