import React, { useState } from "react";
import { Container, Heading } from "./Styled";
import Weather from "./components/Weather";
import GetNewLocation from "./components/GetNewLocation";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e, location) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=ac064e636fcc677ceabf6c8a9c80a498&query=${location}`
      );
      const data = await res.json();
      setWeather(data.current);
      setLocation(data.location);
    } catch (e) {
      setErrorMsg(`Sorry an error occured ${e}`);
    }
  };

  return (
    <Container>
      <Heading>WHATEVER THE WEATHER</Heading>
      <GetNewLocation handleSubmit={handleSubmit} />
      <p>{errorMsg}</p>
      {weather && location && <Weather weather={weather} location={location} />}
    </Container>
  );
}

export default App;
