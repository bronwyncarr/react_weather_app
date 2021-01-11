import { WeatherInfo, WeatherText } from './../Styled.js'

function Weather({weather}) {
  const {temperature, weather_descriptions, weather_icons} = weather
  return(
    <WeatherInfo>
    <img src={weather_icons} />
          <WeatherText>
          <p>{temperature} celcuis</p>
          <p>{weather_descriptions}</p>
          </WeatherText>
  </WeatherInfo>
  )
}

export default Weather
