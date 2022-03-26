import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { VscFilePdf, VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  return (
    <div className={styles.container} id='home'>
      <main className={styles.main}>
        <p>Hello, my name is</p>
        <h1>Houston Wickham</h1>
        <p>and I like to</p>
        <h2>Build Things Digitally.</h2>
        <ul>
          <li>
            <Link href='/Houston_Wickham_Resume.PDF' passHref={true}>
              <a>
                <VscFilePdf />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/houstonwickham' passHref={true}>
              <a>
                <VscGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link
              href='https://www.linkedin.com/in/houston-wickham-78040b91/'
              passHref={true}
            >
              <a>
                <AiOutlineLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href='mailto:houstonwickham@gmail.com' passHref={true}>
              <a>
                <AiOutlineMail />
              </a>
            </Link>
          </li>
        </ul>
        <p className={styles.mainText}>
          I am a front-end developer with over 8 years of experience in web and
          email development, working on both the client and agency side.
          Currently, my focus is on building exceptional user experiences with
          React.
        </p>
      </main>
    </div>
  );
};

export default Home;
