import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@ryan-li.ca">Email</a>
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
