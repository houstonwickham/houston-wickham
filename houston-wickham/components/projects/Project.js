const Project = ({ name, description, image, link }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{image}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
