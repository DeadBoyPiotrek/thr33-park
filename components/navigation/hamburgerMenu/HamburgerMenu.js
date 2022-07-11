import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavigationLinks from '../navigationLinks/NavigationLinks';
import styles from './hamburgerMenu.module.scss';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
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
          <NavigationLinks />
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;
