import './ProjectCart.css';
function ProjectCart({project}){
    return (
  <div className="project-cart">
  <h3>{project.title}</h3>
  <p>{project.description}</p>
  {project.tech.map((tech) => (
    <span key={tech}>{tech}</span>
  ))}
      <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
<a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
  </div>
    )

}
export default ProjectCart;