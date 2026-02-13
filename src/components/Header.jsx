import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>Ryan Li</h1>
          </NavLink>
        </div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
            Blog
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header
