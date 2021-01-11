import { Form, Label, Input } from "../Styled.js";
import { useState } from "react";

function GetNewLocation({ handleSubmit }) {
  const [userLocation, setUserLocation] = useState("");

  const handleChange = (e) => {
    setUserLocation(e.target.value);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, userLocation)}>
      <Label>Please enter a city:</Label>
      <Input
        type="text"
        name="location"
        value={userLocation}
        onChange={handleChange}
      />
    </Form>
  );
}

export default GetNewLocation;
