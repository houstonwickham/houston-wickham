import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import { SiNextdotjs, SiVercel } from 'react-icons/si';

const Footer = () => {
  return (
    <p className={styles.footer}>
      Built with&nbsp;
      <Link href='https://nextjs.org/' passHref={true}>
        <a>
          <SiNextdotjs />
        </a>
      </Link>{' '}
      Powered by&nbsp;
      <Link href='https://vercel.com/' passHref={true}>
        <a>
          <SiVercel />
        </a>
      </Link>
    </p>
  );
};

export default Footer;
