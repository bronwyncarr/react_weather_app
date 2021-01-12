import React, { useState } from "react";
import { Container, Heading } from "./Styled";
import Weather from "./components/Weather";
import GetNewLocation from "./components/GetNewLocation";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({});

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
      console.log(`Sorry an error occured: ${e}`);
    }
  };

  return (
    <Container>
      <Heading>FOUR SEASONS IN ONE DAY</Heading>
      <GetNewLocation handleSubmit={handleSubmit} />
      {weather && <Weather weather={weather} location={location} />}
    </Container>
  );
}

export default App;
