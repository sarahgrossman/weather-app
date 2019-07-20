import React, { Component } from 'react'
import CityInput from './CityInput'
import CoordinatesInput from './CoordinatesInput'

const searchOptions = ['Latitude and longitude', 'City name']

// eslint-disable-next-line react/prefer-stateless-function
export default class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownType: '',
      latitude: '',
      longitude: '',
      cityName: ''
    }

    this.setDropdownType = this.setDropdownType.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({ dropdownType: searchOptions[0]})
  }

  setDropdownType (e) {
    this.setState({ dropdownType: e.target.value })
  }

  handleChange (e) {
    this.setState({ [e.target.name]: [e.target.value]})
  }

  handleSubmit (e) {
    e && e.preventDefault()

    // TODO: implement sending correct data from state in API call
  }


  render () {
    const form = this.state.dropdownType === 'City name'
      ? <CityInput handleChange={this.handleChange} />
      : <CoordinatesInput handleChange={this.handleChange} />

    return (
      <div>
        <select onChange={this.setDropdownType}>
          {searchOptions.map(option => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
        <form>
          {form}
          <button type='submit' onClick={this.handleSubmit}>Let's go</button>
        </form>
      </div>
    )
  }
}

