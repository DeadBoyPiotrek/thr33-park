import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import styles from './navigation.module.scss';
// import NavigationLinks from './navigationLinks/NavigationLinks';
import Link from 'next/link';
import NavigationLogo from './navigationLogo/NavigationLogo';
function Navigation() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <NavigationLogo />

          {/* <NavigationLinks /> */}
          <li className={styles.nav__link3}>
            <Link href="/snowpark">
              <a className={styles.nav__link}>snowpark</a>
            </Link>
          </li>
          <li className={styles.nav__link3}>
            <Link href="/features">
              <a className={styles.nav__link}>features</a>
            </Link>
          </li>
          <li className={styles.nav__link3}>
            <Link href="/about-us">
              <a className={styles.nav__link}>about us</a>
            </Link>
          </li>

          <HamburgerMenu />
        </ul>
      </div>
    </>
  );
}

export default Navigation;
