import styles from '../styles/Projects.module.css';
import ProjectList from '../components/projects/ProjectList';
import { data } from '../components/projects/data';

const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <main className={styles.main}>
        <h1 className={styles.title}>Recent Projects</h1>
        <ProjectList data={data} />
      </main>
    </div>
  );
};

export default Projects;
