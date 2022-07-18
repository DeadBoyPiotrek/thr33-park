import Snowpark from '../../components/snowpark/Snowpark';
import { getCurrentWeather } from '../../lib/weatherFunctions';
import styles from './snowparkPage.module.scss';
export const getStaticProps = async () => {
  // const forecast = await get5DaysForecast();
  const weather = await getCurrentWeather();

  return {
    props: {
      weather,
    },
    revalidate: 5,
  };
};

const SnowparkPage = ({ weather }) => {
  return (
    <>
      <main className={styles.wrapper}>
        <Snowpark weather={weather} />
      </main>
    </>
  );
};

export default SnowparkPage;
