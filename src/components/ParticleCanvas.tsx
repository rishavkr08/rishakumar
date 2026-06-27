'use client'
import { useEffect, useRef } from 'react'
import { uiConfig } from '@/config/ui.config'

interface Particle {
  x: number; y: number; vx: number; vy: number
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!uiConfig.showParticles) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let pts: Particle[] = []
    const mouse = { x: -999, y: -999 }

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(28, Math.min(72, Math.floor(w * h / 17000)))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))
    }

    init()

    const onResize = () => init()
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove, { passive: true })

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const [r, g, b] = hexToRgb(uiConfig.accent)

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.5)`
        ctx.fill()

        // Lines between nearby particles
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.hypot(dx, dy)
          if (d < 118) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.11 * (1 - d / 118)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Lines to mouse cursor
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (md < 165) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.18 * (1 - md / 165)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  if (!uiConfig.showParticles) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
