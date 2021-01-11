import "./App.css";
import React, { useState } from "react";
import { Container, Info, Heading } from "./Styled";
import Weather from "./components/Weather"

function App() {
  const [weather, setWeather] = useState([])

  const handleClick = async () => {  
    try {
     const res = await fetch('http://api.weatherstack.com/current?access_key=ac064e636fcc677ceabf6c8a9c80a498&query=Melbourne')
     const data = await res.json()
      console.log(data)
      setWeather(data.current)
    } catch (e) {
      console.log(`Sorry an error occured: ${e}`);
    }
  }

  return (
    <Container>
      <Heading>WEATHER APP</Heading>
      <Info>
        <h2>Melbourne</h2>
        <button onClick={handleClick}>Get Melbourne weather</button>
        <h5>Time</h5>
        {console.log(weather)}
        {weather && <Weather weather={weather} /> }
      </Info>
    </Container>
  );
}

export default App;
