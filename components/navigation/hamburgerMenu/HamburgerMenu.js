import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
// import NavigationLinks from '../navigationLinks/NavigationLinks';
import styles from './hamburgerMenu.module.scss';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburgerMenu} onClick={openNavHandler}>
        <AiOutlineMenu size="2em" />

        <ul
          className={
            isOpen ? styles.hamburgerMenuOpen : styles.hamburgerMenuClose
          }
        >
          <li>
            <Link href="/snowpark">
              <a className={styles.hamburgerMenu__link}>snowpark</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className={styles.hamburgerMenu__link}>features</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a className={styles.hamburgerMenu__link}>about us</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;
