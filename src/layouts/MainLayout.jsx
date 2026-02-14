import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MainLayout.css'

const ROUTES = ['/', '/projects', '/blog']

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(true)
  const scrollLockRef = useRef(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    scrollLockRef.current = true
    const timer = setTimeout(() => {
      scrollLockRef.current = false
    }, 650)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollLockRef.current) return
      if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      if (Math.abs(delta) < 20) return
      event.preventDefault()

      const currentIndex = ROUTES.indexOf(location.pathname)
      if (currentIndex === -1) return

      const nextIndex = delta > 0 ? currentIndex + 1 : currentIndex - 1
      if (nextIndex < 0 || nextIndex >= ROUTES.length) return

      scrollLockRef.current = true
      navigate(ROUTES[nextIndex])
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [location.pathname, navigate])

  return (
    <div className="App">
      <Header />
      <main key={location.pathname} className={isAnimating ? 'page-enter' : ''}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
