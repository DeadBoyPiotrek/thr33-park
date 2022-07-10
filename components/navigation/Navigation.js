import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import styles from './navigation.module.scss';
import NavigationLinks from './navigationLinks/NavigationLinks';
import NavigationLogo from './navigationLogo/NavigationLogo';
function Navigation() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <NavigationLogo />
          <NavigationLinks />
          {/* <HamburgerMenu /> */}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
