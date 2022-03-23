import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/www-logo.png';
import styles from '../../styles/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
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
      </header>
      <nav className={navOpen ? styles.mobileNavActive : styles.mobileNav}>
        <div className={styles.mobileCloseHolder}>
          <button onClick={() => setNavOpen(false)}>
            <FaTimes />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
