import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

const Project = ({ name, description, image, link }) => {
  return (
    <div className={styles.projectWrapper}>
      <Link href={link} passHref={true}>
        <a>
          <div className={styles.imageWrapper}>
            <Image
              src={`/images/${image}.png`}
              alt={name}
              width='400'
              height='250'
            />
          </div>
          <div className={styles.bottomBar}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Project;
