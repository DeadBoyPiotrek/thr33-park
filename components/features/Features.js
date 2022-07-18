import Link from 'next/link';
import React from 'react';
import FeaturePreview from '../../components/features/feature/FeaturePreview';
import styles from './features.module.scss';
function Features({ features }) {
  const featuresArr = features.map(feature => (
    <Link key={feature.name} href={`/features/${feature.linkName}`}>
      <a>
        <FeaturePreview name={feature.name} image={feature.image} />
      </a>
    </Link>
  ));
  console.log(featuresArr);
  return <div className={styles.features}>{featuresArr}</div>;
}

export default Features;
