import Link from 'next/link';
import React from 'react';
import FeaturePreview from '../../components/feature/FeaturePreview';
import { getFeaturesPreview } from '../../lib/featuresFunctions';
import styles from './features.module.scss';

export const getStaticProps = async () => {
  const features = await getFeaturesPreview();

  return {
    props: {
      features,
    },
  };
};

function Features({ features }) {
  const featuresArr = features.map(feature => (
    <Link key={feature.name} href={`/features/${feature.linkName}`}>
      <a>
        <FeaturePreview name={feature.name} image={feature.image} />
      </a>
    </Link>
  ));

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.features}>{featuresArr}</div>
      </div>
    </>
  );
}

export default Features;
