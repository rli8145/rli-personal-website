import './Footer.css'

// const buildTime = new Date(__BUILD_TIME__).toLocaleString('en-US', {
//   timeZone: 'America/New_York',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   timeZoneName: 'short',
// })

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} Ryan Li. Licensed under MIT.
            {/* &nbsp;&middot;&nbsp; Last updated: {buildTime} */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
