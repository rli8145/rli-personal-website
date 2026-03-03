import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MainLayout.css'

function MainLayout() {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(true)
  const pugRef = useRef(null)
  const [pugPos, setPugPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const handlePugMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = pugRef.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPugPos({ x, y })
  }

  const handlePugMouseLeave = () => setPugPos({ x: 0, y: 0 })

  const handlePugClick = () => {
    const audio = new Audio('/bark.mp3')
    audio.play()
  }

  return (
    <div className="App">
      <Header />
      <main key={location.pathname} className={isAnimating ? 'page-enter' : ''}>
        <Outlet />
      </main>
      <Footer />
      <img
        ref={pugRef}
        src="/pug_favicon_512.png"
        alt="pug"
        className="pug-overlay"
        onMouseMove={handlePugMouseMove}
        onMouseLeave={handlePugMouseLeave}
        onClick={handlePugClick}
        style={{
          transform: `translate(${pugPos.x}px, ${pugPos.y}px)`,
          transition: pugPos.x === 0 && pugPos.y === 0 ? 'transform 0.3s ease-out' : 'none',
        }}
      />
    </div>
  )
}

export default MainLayout
