import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="mailto:rli8145@gmail.com">Email</a>
            <a href="https://github.com/rli8145" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ryan-li-0bab58363/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="copyright">
            &copy; {currentYear} Ryan Li. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
