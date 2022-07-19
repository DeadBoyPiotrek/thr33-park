import Map from '../../components/snowpark/Map';
import Conditions from './Conditions';
import Forecast from './Forecast';
import styles from './snowpark.module.scss';
function Snowpark({ weather }) {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <h2>Jak do nas dojechać ?</h2>
        <Map weather={weather} />
      </section>
      <section className={styles.section}>
        <h2>Warunki na stoku</h2>
        <Conditions weather={weather} />
      </section>
      <section className={styles.section}>
        <h2>Zaplanuj wyjazd</h2>
        <Forecast />
      </section>
    </div>
  );
}

export default Snowpark;
