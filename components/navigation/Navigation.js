import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.scss';
function Navigation() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__features}>
            <Link href="/features">
              <a className={styles.features}>features</a>
            </Link>
          </li>
          <li className={styles.nav__snowpark}>
            <Link className={styles.features} href="/snowpark">
              <a className={styles.features}>snowpark</a>
            </Link>
          </li>
          <li className={styles.nav__aboutUs}>
            <Link href="/about-us">
              <a className={styles.features}>about us</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
