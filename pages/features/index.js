import Features from '../../components/features/Features';
import { getFeaturesPreview } from '../../lib/featuresFunctions';
import styles from './featuresPage.module.scss';
export const getStaticProps = async () => {
  const features = await getFeaturesPreview();

  return {
    props: {
      features,
    },
  };
};

function FeaturesPage({ features }) {
  return (
    <>
      <main className={styles.wrapper}>
        <Features features={features} />
      </main>
    </>
  );
}

export default FeaturesPage;
