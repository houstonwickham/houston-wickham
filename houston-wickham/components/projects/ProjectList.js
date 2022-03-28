import Project from './Project';

const ProjectList = ({ data }) => {
  return (
    <div>
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
