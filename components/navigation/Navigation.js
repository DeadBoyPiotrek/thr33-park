import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.scss';
function Navigation() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <Link href="/">
              <a className={`${styles.nav__link} ${styles.nav__logo}`}>
                <Image
                  className={styles.logo}
                  src="/images/SVG/logo-02.svg"
                  height={40}
                  width={85}
                  alt="logo"
                />
                {/* hello */}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/snowpark">
              <a className={styles.nav__link}>snowpark</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className={styles.nav__link}>features</a>
            </Link>
          </li>
          <li>
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
