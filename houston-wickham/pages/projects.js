import styles from '../styles/Projects.module.css';
import ProjectList from '../components/projects/ProjectList';

const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon!</h1>
        <ProjectList />
      </main>
    </div>
  );
};

export default Projects;
