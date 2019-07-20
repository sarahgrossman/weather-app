import React, { Component } from 'react'

export default class CityInput extends Component {
  render () {
    return (
      <div style={{'marginTop': '30px'}}>
        <label htmlFor='city'>City name</label>
        <input type='text' id='city' onChange={this.props.handleChange} name='cityName' />
      </div>
    )
  }
}
