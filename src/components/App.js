import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import WeatherRequest from './WeatherForm'

function App () {
  return (
    <HashRouter>
      <Route path='/' component={WeatherRequest} />
    </HashRouter>
  )
}

export default App
