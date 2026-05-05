import './Footer.css'
// import WebringIcon from './WebringIcon'

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
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} Ryan Li. Licensed under MIT.
              {/* &nbsp;&middot;&nbsp; Last updated: {buildTime} */}
            </p>
            {/* <div className="webring">
              <a href="https://math-webring.vercel.app/#ryan-li.ca?nav=prev" aria-label="Previous webring site">←</a>
              <a href="https://math-webring.vercel.app/#ryan-li.ca" target="_blank" rel="noopener noreferrer" aria-label="UW Math Webring">
                <WebringIcon size={16} color="currentColor" />
              </a>
              <a href="https://math-webring.vercel.app/#ryan-li.ca?nav=next" aria-label="Next webring site">→</a>
            </div> */}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
