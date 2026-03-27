import './Skills.css';
function Skills(){
    const frontends = ["React", "HTML5", "CSS3", "JavaScript"];
    const   Backends = ["Node.js", "Express.js"];
    const databases = ["MongoDB"];
    const toolss = ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"];
    return (
        <section id='skills'>
            <h2>Skills</h2>
            <div className='skills-grid'>
        <div className="skill-category">
    <h3 className="tech">Frontend:</h3>
    <div className="skill-tags">
        {frontends.map((frontend) => (
            <span key={frontend} className="skill-tag">{frontend}</span>
        ))}
    </div>
</div>
      <div className="skill-category">
      <h3 className='tech'>Backend:</h3>
      <div className="skill-tags">
      {Backends.map((backend) => (
        <span key={backend} className="skill-tag">{backend}</span>
      ))}
      </div>
      </div>
      <div className="skill-category">
      <h3 className='tech'>Database:</h3>
            <div className="skill-tags">
      {databases.map((database) => (
        <span key={database} className="skill-tag">{database}</span>
      ))}
      </div>
    </div>
    <div className="skill-category">
      <h3 className='tech'>Tools:</h3>
      <div className="skill-tags">
      {toolss.map((tools) => (
        <span key={tools} className="skill-tag">{tools}</span>
      ))}
      </div>
   </div>
     </div>
        </section>
    )
}
export default Skills;