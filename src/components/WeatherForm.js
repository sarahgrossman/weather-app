import React, { Component } from 'react'
import { FlexContainer, MarginContainer } from '../styles/StyledComponents'
import CityInput from './CityInput'
import CoordinatesInput from './CoordinatesInput'
import InputSelector from './InputSelector'
import { getWeatherByCity, getWeatherByCoordinates } from '../api'
import { formatWeatherData } from '../utils/general'

export default class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputType: '',
      latitude: '',
      longitude: '',
      cityName: '',
      weatherData: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    e && e.preventDefault()

    const { latitude, longitude, cityName} = this.state

    const apiCall = this.state.inputType === 'City name'
      ? getWeatherByCity
      : getWeatherByCoordinates

    const apiArgs = this.state.inputType === 'City name'
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
          alert('There was an error processing your request. Please try again!')
        }
      })
  }

  render () {
    let form
    if (this.state.inputType === 'City name') {
      form = <CityInput handleChange={this.handleChange} />
    } else if (this.state.inputType) {
      form = <CoordinatesInput handleChange={this.handleChange} />
    }

    return (
      <FlexContainer alignCenter flexDirection='column' margin='30px 0' fullWidth>
        <FlexContainer flexDirection='column'>
          <p><strong>Search by</strong></p>
          <InputSelector
            inputType={this.state.inputType}
            handleChange={this.handleChange} />
          <MarginContainer margin='30px 0'>
            <form>
              {form}
              <button type="submit" onClick={this.handleSubmit}>
                Let's go
              </button>
            </form>
          </MarginContainer>
          {!!this.state.weatherData.length && (
            <FlexContainer flexDirection='column' margin='30px 0'>
              <div>
                <p>Temperature: {this.state.weatherData[0].temp}</p>
              </div>
              <div>
                <p>Humidity: {this.state.weatherData[0].humidity}</p>
              </div>
                <p>Pressure: {this.state.weatherData[0].pressure}</p>
            </FlexContainer>
          )}
        </FlexContainer>
      </FlexContainer>
    )
  }
}
