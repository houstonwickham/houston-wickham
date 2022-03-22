import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/www-logo.png';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt='World Wide Wickham'
        width={60}
        height={60}
        placeholder='blur'
      />
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
