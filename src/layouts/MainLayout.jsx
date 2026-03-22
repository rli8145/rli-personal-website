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

  // const handlePugClick = () => {
  //   const audio = new Audio('/bark.mp3')
  //   audio.play()
  // }

  return (
    <div className="App">
      <Header />
      <main key={location.pathname} className={isAnimating ? 'page-enter' : ''}>
        <Outlet />
      </main>
      <Footer />
      {/* <img
        src="/pug_favicon_512.png"
        alt="pug"
        className="pug-overlay"
        onClick={handlePugClick}
      /> */}
    </div>
  )
}

export default MainLayout
