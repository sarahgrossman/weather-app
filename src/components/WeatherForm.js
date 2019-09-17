import React, { Component } from 'react'
import CityInput from './CityInput'
import CoordinatesInput from './CoordinatesInput'
import { getWeatherByCity, getWeatherByCoordinates } from '../api'
import { formatWeatherData } from '../utils/general'

const searchOptions = ['Latitude and longitude', 'City name']

export default class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownType: '',
      latitude: '',
      longitude: '',
      cityName: '',
      weatherData: []
    }

    this.setDropdownType = this.setDropdownType.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setDropdownType (e) {
    this.setState({ dropdownType: e.target.value })
  }

  handleChange (e) {
    this.setState({ [e.target.name]: [e.target.value]})
  }

  handleSubmit (e) {
    e && e.preventDefault()

    const { latitude, longitude, cityName} = this.state

    const apiCall = this.state.dropdownType === 'City name'
      ? getWeatherByCity
      : getWeatherByCoordinates

    const apiArgs = this.state.dropdownType === 'City name'
      ? [cityName]
      : [latitude, longitude]

    apiCall(...apiArgs)
      .then(res => res.json())
      .then(({ list }) => {
        if (list) {
          const weatherData = list.map(dataPoint => {
            if (dataPoint.main) return formatWeatherData(dataPoint)
          })
          this.setState({ weatherData })
        } else {
          // eslint-disable-next-line no-alert
          alert('There was an error processing    your request. Please try again')
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    let form
    if (this.state.dropdownType === 'City name') {
      form = <CityInput handleChange={this.handleChange} />
    } else if (this.state.dropdownType) {
      form = <CoordinatesInput handleChange={this.handleChange} />
    }

    return (
      <div>
        <h1 style={{textAlign: 'center', margin: '30px 0'}}>Welcome to weatherly!</h1>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <select onChange={this.setDropdownType}>
            {!this.state.dropdownType && <option>Choose a search type</option>}
            {searchOptions.map(option => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
          <div>
          <form>
            {form}
            <button
              style={{marginTop: '30px'}}
              type="submit"
              onClick={this.handleSubmit}>Let's go
            </button>
          </form>
          <div>
            {!!this.state.weatherData.length && (
              <div style={{width: '100%', marginTop: '30px'}}>
                <div>
                  <p>Temperature: {this.state.weatherData[0].temp}</p>
                </div>
                <div>
                  <p>Humidity: {this.state.weatherData[0].humidity}</p>
                </div>
                  <p>Pressure: {this.state.weatherData[0].pressure}</p>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    )
  }
}
