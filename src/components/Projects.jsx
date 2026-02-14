import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AR-Enhanced Device Repair Assistant',
      description: 'Augmented reality application that guides users through device repairs step-by-step.',
      technologies: ['YOLOv11n', 'OpenCV', 'GPT-4o Vision', 'OpenAI Whisper API'],
      github: 'https://github.com/danielkwan-dev/golden-age'
    },
    {
      id: 2,
      title: 'Audio Ad Insertion Engine',
      description: 'Dynamically inserts targeted advertisements into audio streams in real-time.',
      technologies: ['Node.js', 'ElevenLabs API', 'Pydub', 'FFmpeg'],
      github: 'https://github.com/jweng121/slotify',
      award: 'UofTHacks Winner'
    },
   {
      id: 3,
      title: 'Weather Playlist Generator',
      description: 'Classifies user-inputted songs and generates weather-matching Spotify playlists using machine learning.',
      technologies: ['React', 'scikit-learn', 'Spotify Web API', 'ReccoBeats API'],
      github: 'https://github.com/rli8145/weather-playlist-generator'
    },
    {
      id: 4,
      title: 'Steel Supply Chain Optimization System',
      description: 'B2B dashboard optimizing cost-emission tradeoffs in steel manufacturing supply chains.',
      technologies: ['Next.js', 'DS.js', 'FastAPI', 'pandas'],
      github: 'https://github.com/rli8145/MITEC-Array-Technologies'
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">Some stuff I've built lately.</p>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.award && <span className="project-award">{project.award}</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                className="project-github-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
