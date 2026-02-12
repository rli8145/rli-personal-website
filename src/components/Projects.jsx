import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration',
      technologies: ['React', 'TypeScript', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A real-time chat application with WebSocket support',
      technologies: ['React', 'Socket.io', 'Express'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Project</a>
                <a href={project.github} className="project-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
