import React from 'react'

function CoordinatesInput (props) {
  return (
    <div style={{'marginTop': '30px'}}>
      <div>
        <label htmlFor='latitude'>Latitude</label>
        <input type='text' id='latitude' name='latitude' onChange={props.handleChange} />
      </div>
      <div>
      <label htmlFor='longitude'>Longitude</label>
      <input type='text' id='longitude' name='longitude' onChange={props.handleChange} />
      </div>
    </div>
  )
}

export default CoordinatesInput
