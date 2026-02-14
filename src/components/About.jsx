import './About.css'

function About() {
  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Passionate about competitive and proof-based math, systems-level software, and computational modeling.
            In my free time I enjoy:
          </p>
          <ul className="interests-list">
            <li>tackling difficult puzzles and Olympiad math</li>
            <li>building stuff!</li>
            <li>playing poker</li>
            <li>good movies (<a href="https://letterboxd.com/rli8145/" target="_blank" rel="noopener noreferrer" className="external-link">Letterboxd<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>) and music (<a href="https://open.spotify.com/user/ryanli-nz" target="_blank" rel="noopener noreferrer" className="external-link">Spotify<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>)</li>
          </ul>
          <p>
            Currently developing a 5-Minute Momentum Flag System on{' '}
            <a href="https://www.linkedin.com/company/wat-street/" target="_blank" rel="noopener noreferrer" className="external-link">
              Wat Street
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            . I'm always open to discussing new opportunities and ideas; please feel free to{' '}
            <a href="mailto:rr2li@uwaterloo.ca" className="external-link">
              reach out
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
