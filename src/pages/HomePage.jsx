import Hero from '../components/Hero'
import About from '../components/About'
import './HomePage.css'

function HomePage() {
  return (
    <div className="page home-page">
      <div className="home-hero">
        <div className="home-container">
          <div className="home-left">
            <Hero />
          </div>
          <div className="home-right">
            <About />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
