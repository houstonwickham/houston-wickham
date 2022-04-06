import Project from './Project';
import data from './data';
import styles from '../../styles/Projects.module.css';

const ProjectList = ({ data }) => {
  return (
    <div className={styles.projectListWrapper}>
      {data.map((project) => {
        return (
          <Project
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
            key={project.name}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
