import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './hamburgerMenu.module.scss';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState('open');
  return (
    <div className={styles.hamburgerMenu}>
      <AiOutlineMenu size="2em" />
      <div className={styles.hamburgerMenu.isOpen}>hello</div>
    </div>
  );
};
export default HamburgerMenu;
