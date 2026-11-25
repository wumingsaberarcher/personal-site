import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  s: number
  vx: number
  vy: number
  warm: boolean
  cube: boolean
}

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let particles: Particle[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      /* Dense enough to read across the whole scroll, still light on GPU */
      const count = Math.min(140, Math.floor((window.innerWidth * window.innerHeight) / 12000))
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        s: i % 6 === 0 ? 4 : 1.4 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14,
        warm: i % 11 === 0,
        cube: i % 6 === 0,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -8) p.x = window.innerWidth + 8
          if (p.x > window.innerWidth + 8) p.x = -8
          if (p.y < -8) p.y = window.innerHeight + 8
          if (p.y > window.innerHeight + 8) p.y = -8
        }
        ctx.fillStyle = p.warm
          ? 'rgba(242, 115, 56, 0.45)'
          : p.cube
            ? 'rgba(64, 217, 198, 0.28)'
            : 'rgba(139, 150, 158, 0.35)'
        if (p.cube) {
          ctx.fillRect(p.x, p.y, p.s, p.s)
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.s * 0.45, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
