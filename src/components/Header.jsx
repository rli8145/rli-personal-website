import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Ryan Li</h1>
        </div>
        <nav className="nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
