import { useRef, useState } from 'react'

function MagneticIcon({ children, href, className, ariaLabel, ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const x = (clientX - centerX) * 0.3
    const y = (clientY - centerY) * 0.3

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.3s ease-out' : 'none'
      }}
      {...props}
    >
      {children}
    </a>
  )
}

export default MagneticIcon
