import React from 'react';
import { getCurrentWeather } from '../../lib/weatherFunctions';
import styles from './snowpark.module.scss';

export const getStaticProps = async () => {
  const weather = await getCurrentWeather();

  return {
    props: {
      weather,
    },
    revalidate: 6,
  };
};

function Snowpark({ weather }) {
  return (
    <>
      <div className={styles.wrapper}>
        {JSON.stringify(weather)}
        <div>Pogoda na stoku</div>
        <div></div>
      </div>
    </>
  );
}

export default Snowpark;
