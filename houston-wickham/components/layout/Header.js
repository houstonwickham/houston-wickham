import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Sidebar from './Sidebar';
import styles from '../../styles/Header.module.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo} onClick={() => setNavOpen(false)}>
            <ScrollLink to='home' smooth={true}>
              HW
            </ScrollLink>
          </div>
          <nav>
            <ScrollLink
              to='projects'
              smooth={true}
              duration={1000}
              hashSpy={true}
            >
              PROJECTS
            </ScrollLink>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={1000}
              hashSpy={true}
            >
              CONTACT
            </ScrollLink>
          </nav>
          <button
            onClick={() => setNavOpen(true)}
            duration={1000}
            hashSpy={true}
          >
            <FaBars />
          </button>
        </div>
      </header>
      <Sidebar navOpen={navOpen} onCloseNav={() => setNavOpen(false)} />
    </>
  );
};

export default Header;
