import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import {
  // get5DaysForecast,
  getCurrentWeather,
  uppercaseFirstLetter,
} from '../../lib/weatherFunctions';
import styles from './snowpark.module.scss';
export const getStaticProps = async () => {
  // const forecast = await get5DaysForecast();
  const weather = await getCurrentWeather();
  const props = {
    city: weather.name,
    temperature: weather.main.temp,
    weather: weather.weather[0].main,
    weatherDescription: weather.weather[0].description,
    weatherIcon: weather.weather[0].icon,
  };
  return {
    props: {
      props,
    },
    revalidate: 6,
  };
};
// hey copilot create clock function with update interval

const Snowpark = ({ props }) => {
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
    <>
      <div className={styles.wrapper}>
        {/* <pre>{JSON.stringify(props, undefined, 2)}</pre> */}
        <div className={styles.snowpark}>
          <section className={styles.section}>
            <h2>Jak do nas dojechać ?</h2>
            <Map />
          </section>
          <section className={styles.section}>
            <h2>Warunki na stoku</h2>
            <div className={styles.weather}>
              <div className={styles.weather__temperature}>
                {Math.round(props.temperature)}
                <span className={styles.weather__degree}>˚</span>C
              </div>

              <div className={styles.weather__location}>
                <div className={styles.weather__location__city}>
                  <span className={styles.weather__location__city__time}>
                    {time}
                  </span>
                  &nbsp;{props.city}
                </div>
                <div>{uppercaseFirstLetter(props.weatherDescription)}</div>
              </div>
              <div className={styles.weather__icon}>
                <Image
                  quality={100}
                  width={220}
                  height={220}
                  alt="weather icon"
                  src={`https://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
                />
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h2>Zaplanuj wyjazd</h2>
          </section>
        </div>
      </div>
    </>
  );
};

export default Snowpark;
