import Image from 'next/image';
import React from 'react';
import styles from './forecast.module.scss';
function Forecast() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const daysArray = days.map((day, index) => (
    <div key={index} className={styles.day}>
      <Image
        alt={day}
        src="http://openweathermap.org/img/wn/01n@4x.png"
        width={150}
        height={150}
      />
      <p> {day}</p>
      <p> 20°</p>
    </div>
  ));

  return <div className={styles.forecast}>{daysArray}</div>;
}

export default Forecast;
