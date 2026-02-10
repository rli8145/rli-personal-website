import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer with expertise in building
              modern web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
            <p>
              My focus is on writing clean, maintainable code and creating
              seamless user experiences. I'm always eager to learn new
              technologies and take on challenging projects.
            </p>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
