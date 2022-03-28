import { Link as ScrollLink } from 'react-scroll';
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
        <ScrollLink
          to='projects'
          smooth={true}
          onClick={onCloseNav}
          offset={-100}
        >
          PROJECTS
        </ScrollLink>
        <ScrollLink to='contact' smooth={true} onClick={onCloseNav}>
          CONTACT
        </ScrollLink>
      </ul>
    </div>
  );
};

export default Sidebar;
