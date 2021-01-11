import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const Info = styled.div `
  display: flex;
  padding: 2rem;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  min-width: 500px;
`

export const Heading = styled.h1 `
  font-family: 'Roboto';
  color: #fff;
  font-size: 4rem;
`

export const WeatherInfo = styled.div `
  font-family: 'Roboto';
  font-size: 1.5rem;
  display: flex;
  justify-content: between;
  margin-top: 2rem;
  `
  
  export const Button = styled.button `
    font-size: 1.5rem;
    padding: 1rem;
  `

export const WeatherPic = styled.img `
  width: 150px;
  margin: 0;
  padding-right: 2rem;
`
export const WeatherText = styled.div `

`