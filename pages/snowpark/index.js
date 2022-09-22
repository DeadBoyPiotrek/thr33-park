import Snowpark from '../../components/snowpark/Snowpark';
import { getWeatherAndForecast } from '../../lib/weatherFunctions';
import styles from './snowparkPage.module.scss';
export const getStaticProps = async () => {
  const weather = await getWeatherAndForecast();

  return {
    props: {
      weather,
    },
    revalidate: 60,
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
