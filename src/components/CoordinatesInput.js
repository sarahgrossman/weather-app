/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export default class CoordinatesInput extends Component {
  render () {
    return (
      <div style={{'marginTop': '30px'}}>
        <div>
          <label htmlFor='latitude'>Latitude</label>
          <input type='text' id='latitude' name='latitude' />
        </div>
        <div>
        <label htmlFor='longitude'>Longitude</label>
        <input type='text' id='longitude' name='latitude'/>
        </div>
      </div>
    )
  }
}
