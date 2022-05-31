import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Feature from './Feature';
import styles from './features.module.scss';

function Features() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logoLink}>
          <Link className={styles.logoLink} href="/">
            <a className={styles.nav__link}>
              <Image
                className={styles.logo}
                src="/images/logoBlue2.svg"
                height={150}
                width={150}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className={styles.features}>
          <Feature name={'z-rail'} />
          <Feature name={'5m kicker'} />
          <Feature name={'butter-box'} />
          <Feature name={'waterfall-rail'} />
          <Feature name={'z-rail'} />
          <Feature name={'5m kicker'} />
          <Feature name={'butter-box'} />
          <Feature name={'waterfall-rail'} />
        </div>
      </div>
    </>
  );
}

export default Features;
