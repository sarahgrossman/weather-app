import React from 'react'

function CityInput (props) {
  return (
    <div style={{'marginTop': '30px'}}>
      <label htmlFor='city'>City name</label>
      <input type='text' id='city' onChange={props.handleChange} name='cityName' />
    </div>
  )
}

export default CityInput
