import { WeatherInfo, WeatherText, WeatherPic } from "./../Styled.js";
import Time from './Time'

function Weather({ weather }) {
  // If weather is not defined this line will log a notification
  if (!weather) {
    console.log("No weather information reported")
    return null;
  }
  console.log(weather)

  // If weather is not null
  const { temperature, weather_descriptions, weather_icons, observation_time } = weather;
  return (
    <>
    <WeatherInfo>
      <WeatherPic src={weather_icons} alt={weather_descriptions} />
      <WeatherText>
        <p>Temperature: <strong>{temperature}</strong> C.</p>
        <p>{weather_descriptions}</p>
      </WeatherText>
    </WeatherInfo>
    <Time time={observation_time}/>
    </>
  );
}

export default Weather;
