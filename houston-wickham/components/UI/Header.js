import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/www-logo.png';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src={logo}
          alt='World Wide Wickham'
          width={60}
          height={60}
          placeholder='blur'
        />
      </Link>
      <nav>
        <Link href='/projects'>PROJECTS</Link>
        <Link href='/contact'>CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;
