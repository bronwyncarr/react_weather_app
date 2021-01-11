import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
export const Info = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  min-width: 500px;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
`;

export const WeatherDisplay = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: between;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
`;

export const WeatherPic = styled.img`
  width: 150px;
  margin: 0;
  padding-right: 2rem;
`;

export const WeatherText = styled.div``;

export const Form = styled.form`
  margin-bottom: 2rem; 
  color: #fff;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  padding-right: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
`;
