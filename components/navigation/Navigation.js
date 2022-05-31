import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.scss';
function Navigation() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link className={styles.features} href="/snowpark">
              <a className={styles.nav__link}>snowpark</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/features">
              <a className={styles.nav__link}>features</a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/about-us">
              <a className={styles.nav__link}>about us</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
