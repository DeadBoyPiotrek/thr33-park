import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './conditions.module.scss';
function Conditions({ weather }) {
  // hey copilot create clock function with update interval
  //* clock -------------------------------------------------
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('pl-PL', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  //* clock -------------------------------------------------
  return (
    <div className={styles.weather}>
      <div className={styles.weather__temperature}>
        {weather.temp}
        <span className={styles.weather__degree}>˚</span>C
      </div>

      <div className={styles.weather__location}>
        <div className={styles.weather__location__city}>
          <span className={styles.weather__location__city__time}>{time}</span>
          &nbsp;{weather.name}
        </div>
        <div>{weather.description}</div>
      </div>
      <div className={styles.weather__icon}>
        <Image
          quality={100}
          width={220}
          height={220}
          alt="weather icon"
          src={weather.iconUrl}
        />
      </div>
    </div>
  );
}

export default Conditions;
