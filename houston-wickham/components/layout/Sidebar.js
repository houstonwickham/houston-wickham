import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ navOpen, onCloseNav }) => {
  return (
    <div className={navOpen ? styles.mobileNavActive : styles.mobileNav}>
      <div className={styles.mobileCloseHolder}>
        <button onClick={onCloseNav}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles.mobileNavList} onClick={onCloseNav}>
        <Link href='/projects'>PROJECTS</Link>
        <Link href='/contact'>CONTACT</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
