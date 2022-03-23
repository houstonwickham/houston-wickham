import { useState } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import styles from '../../styles/Header.module.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href='/'>HW</Link>
          </div>
          <nav>
            <Link href='/projects'>PROJECTS</Link>
            <Link href='/contact'>CONTACT</Link>
          </nav>
          <button onClick={() => setNavOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>
      <Sidebar navOpen={navOpen} onCloseNav={() => setNavOpen(false)} />
    </>
  );
};

export default Header;
