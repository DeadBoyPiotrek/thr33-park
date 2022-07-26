import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import styles from './forecast.module.scss';
function Forecast({ weather }) {
  console.log(weather);
  const Day = styled.div`
    border-radius: 20px;
    background: ${props => props.bg};
    /* background-image: ${props => props.bgImg}; */
    color: black;
    flex: 1;
    text-align: center;
    font-size: 1.5rem;
  `;

  const daysArray = weather.forecast.map((day, index) => (
    <Day bg={day.bg.bg} bgImg={day.bgImg} key={index} className={styles.day}>
      <Image alt={day.day} src={day.iconUrl} width={150} height={150} />
      <p> {day.name}</p>
      <p> {day.temp} °</p>
    </Day>
  ));

  return <div className={styles.forecast}>{daysArray}</div>;
}

export default Forecast;
