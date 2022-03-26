const Project = ({ name, description, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{image}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;
