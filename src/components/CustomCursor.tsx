'use client'
import { useEffect, useRef } from 'react'
import { uiConfig } from '@/config/ui.config'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!uiConfig.customCursor) return
    // Only show on fine-pointer devices (mouse, not touch)
    if (!window.matchMedia('(pointer:fine)').matches) return

    document.body.style.cursor = 'none'

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let hover = false
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
        dotRef.current.style.opacity = '1'
      }
      hover = !!(e.target && (e.target as Element).closest?.('a, button, [data-hover]'))
    }

    const loop = () => {
      // Smooth lerp follow (0.18 = real site value)
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      const scale = hover ? 1.7 : 1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 17}px, ${ry - 17}px) scale(${scale})`
        ringRef.current.style.opacity = hover ? '1' : '0.55'
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.style.cursor = ''
    }
  }, [])

  if (!uiConfig.customCursor) return null

  return (
    <>
      {/* Small dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-[6px] h-[6px] rounded-full opacity-0"
        style={{ background: 'var(--accent)' }}
      />
      {/* Ring — lerp-follows with hover scale */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-[34px] h-[34px] rounded-full border"
        style={{ borderColor: 'var(--accent)', opacity: 0.55, transition: 'opacity 0.15s' }}
      />
    </>
  )
}
