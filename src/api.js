const API_ORIGIN = 'api.openweathermap.org/data/2.5/forecast'
const API_KEY = process.env.API_KEY

export function getWeatherByCity (cityName) {
  return fetch(`http://${API_ORIGIN}?q=${cityName},us&APPID=${API_KEY}`)
}

export function getWeatherByCoordinates (latitude, longitude) {
  return fetch(`http://${API_ORIGIN}?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
}
