import './About.css'

function About() {
  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a student passionate about math and technology who thrives on solving problems
            and bringing innovative ideas to life. I enjoy:
          </p>
          <ul className="interests-list">
            <li>mulling over puzzles and hard math problems</li>
            <li>building stuff!</li>
            <li>playing poker</li>
            <li>good movies (<a href="https://letterboxd.com/rli8145/" target="_blank" rel="noopener noreferrer" className="external-link">Letterboxd<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>) and music (<a href="https://open.spotify.com/user/ryanli-nz" target="_blank" rel="noopener noreferrer" className="external-link">Spotify<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>)</li>
            <li>playing golf</li>
          </ul>
          <p>
            As a strong believer in lifelong learning, I'm always searching for
            opportunities to expand my horizons and integrate theory into real-world
            applications. Feel free to reach out at rr2li [at] uwaterloo [dot] ca if you want to chat!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
