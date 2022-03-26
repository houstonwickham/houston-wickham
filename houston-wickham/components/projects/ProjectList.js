import Project from './Project';

const data = [
  {
    name: 'Project 1',
    image: 'image',
    description: 'description',
  },
  {
    name: 'Project 2',
    image: 'image',
    description: 'description',
  },
  {
    name: 'Project 3',
    image: 'image',
    description: 'description',
  },
  {
    name: 'Project 4',
    image: 'image',
    description: 'description',
  },
];

const ProjectList = () => {
  return (
    <div>
      {data.map((project) => {
        return (
          <Project
            name={project.name}
            image={project.image}
            description={project.description}
            key={project.name}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
