import { WeatherPic, WeatherDisplay } from "./../Styled.js";

function WeatherInfo({ weather }) {
  const { temperature, weather_descriptions, weather_icons } = weather;
  return (
    <WeatherDisplay>
      <WeatherPic src={weather_icons} alt={weather_descriptions} />
      <div>
        <p>
          Temperature: <strong>{temperature}</strong> C
        </p>
        <p>{weather_descriptions}</p>
      </div>
    </WeatherDisplay>
  );
}

export default WeatherInfo;
