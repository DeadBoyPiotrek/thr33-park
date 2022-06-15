import Image from 'next/image';
import styles from './FeaturePreview.module.scss';

function FeaturePreview({ name, image }) {
  return (
    <div className={styles.featurePreview}>
      <div className={styles.featurePreview__image}>
        <Image quality={100} alt={name} src={image} width={500} height={300} />
      </div>
      <div className={styles.featurePreview__name}>{name}</div>
    </div>
  );
}

export default FeaturePreview;
