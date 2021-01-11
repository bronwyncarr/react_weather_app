import { WeatherText, WeatherPic, WeatherDisplay } from "./../Styled.js";

function WeatherInfo({ weather }) {
  const { temperature, weather_descriptions, weather_icons } = weather;
  return (
    <WeatherDisplay>
      <WeatherPic src={weather_icons} alt={weather_descriptions} />
      <WeatherText>
        <p>
          Temperature: <strong>{temperature}</strong> C
        </p>
        <p>{weather_descriptions}</p>
      </WeatherText>
    </WeatherDisplay>
  );
}

export default WeatherInfo;
