import Link from 'next/link';

import styles from './navigationLinks.module.scss';
const NavigationLinks = () => {
  return (
    <>
      <li>
        <Link href="/snowpark">
          <a className={styles.link}>snowpark</a>
        </Link>
      </li>
      <li>
        <Link href="/features">
          <a className={styles.link}>features</a>
        </Link>
      </li>
      <li>
        <Link href="/about-us">
          <a className={styles.link}>about us</a>
        </Link>
      </li>
    </>
  );
};

export default NavigationLinks;
