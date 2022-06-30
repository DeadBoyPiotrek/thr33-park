import Image from 'next/image';
import Link from 'next/link';
import styles from './navigationLogo.module.scss';
const NavigationLogo = () => {
  return (
    <li>
      <Link href="/">
        <a className={`${styles.link} ${styles.logo}`}>
          <Image
            className={styles.logo}
            src="/images/SVG/logo-02.svg"
            height={40}
            width={85}
            alt="logo"
          />
        </a>
      </Link>
    </li>
  );
};

export default NavigationLogo;
