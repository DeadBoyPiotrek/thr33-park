import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  getCurrentWeather,
  uppercaseFirstLetter,
} from '../../lib/weatherFunctions';
import styles from './snowpark.module.scss';
export const getStaticProps = async () => {
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
  const [time, setTime] = useState(new Date().toLocaleTimeString(['pl-PL']));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString(['pl-PL']));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <pre>{JSON.stringify(props, undefined, 2)}</pre>
        <div className={styles.snowpark}>
          <section className={styles.snowpark__section}>
            <h2>Pogoda na stoku</h2>
            <div className={styles.snowpark__section__main}>
              <div className={styles.snowpark__section__main__temperature}>
                {Math.round(props.temperature)}
                &nbsp;
                <span className={styles.snowpark__section__main__degree}>
                  ˚
                </span>
                C
              </div>

              <div className={styles.snowpark__section__main__location}>
                <div className={styles.snowpark__section__main__location__city}>
                  {time}&nbsp;{props.city}
                </div>
                <div>{uppercaseFirstLetter(props.weatherDescription)}</div>
              </div>
              <div className={styles.snowpark__section__main__icon}>
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
        </div>
      </div>
    </>
  );
};

export default Snowpark;
