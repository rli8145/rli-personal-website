import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MainLayout.css'

function MainLayout() {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

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
