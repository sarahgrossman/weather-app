export const kelvinToFahrenheit = (kelvin) => {
  return Math.round((9 / 5) * (kelvin - 273) + 32)
}

export const formatWeatherData = ({ main }) => ({
  temp: `${kelvinToFahrenheit(main.temp)} F`,
  humidity: `${main.humidity}%`,
  pressure: `${main.pressure} hPa`
})
