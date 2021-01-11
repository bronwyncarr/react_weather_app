import { Info } from "./../Styled.js";
import Time from "./Time";
import WeatherInfo from "./WeatherInfo"

function Weather({ weather, location }) {
  // If weather is not defined this line will log a notification
  if (!weather) {
    console.log("No weather information reported");
    return null;
  }

  // If weather is not null
  return (
    <Info>
      <h2>Weather for {location.name}, {location.region}</h2>
      <WeatherInfo weather={weather}/>
      <Time location={location} />
    </Info>
  );
}

export default Weather;
