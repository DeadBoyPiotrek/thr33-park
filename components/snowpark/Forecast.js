import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// import styles from './forecast.module.scss';
const Day = styled.div`
  border-radius: 20px;
  background: ${props => props.bg};
  background-image: ${props => props.bgImg};
  color: black;
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  //media small screen
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  //media tablet
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  //media phone
  @media (max-width: 480px) {
  }
`;

const ForecastDiv = styled.div`
  width: 80%;
  display: flex;
  gap: 2rem;

  //media small screen
  @media (max-width: 1024px) {
    @content;
  }
  //media tablet
  @media (max-width: 768px) {
    gap: 1rem;
  }
  //media phone
  @media (max-width: 480px) {
    width: 100%;
  }
  //media small phone
  @media (max-width: 330px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
function Forecast({ weather }) {
  // console.log(weather);

  const daysArray = weather.forecast.map((day, index) => (
    <Day bg={day.bg.bg} bgImg={day.bgImg} key={index}>
      <Image alt={day.day} src={day.iconUrl} width={150} height={150} />
      <p> {day.name}</p>
      <p> {day.temp} °</p>
    </Day>
  ));

  return <ForecastDiv>{daysArray}</ForecastDiv>;
}

export default Forecast;
