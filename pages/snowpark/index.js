import React from 'react';
import { getCurrentWeather } from '../../lib/weatherFunctions';
import styles from './snowpark.module.scss';

export const getStaticProps = async () => {
  const weather = await getCurrentWeather();
  const props = {
    time: new Date().toLocaleTimeString(),
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

function Snowpark({ props }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.snowpark}>
          <section className={styles.snowpark__section}>
            <h2>Pogoda na stoku</h2>
            <pre>{JSON.stringify(props, undefined, 2)}</pre>
          </section>
        </div>
      </div>
    </>
  );
}

export default Snowpark;
