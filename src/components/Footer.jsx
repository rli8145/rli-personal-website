import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} Ryan Li. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
