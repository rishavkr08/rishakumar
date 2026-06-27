'use client'
import { useEffect, useRef } from 'react'
import { uiConfig } from '@/config/ui.config'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!uiConfig.customCursor) return
    document.body.style.cursor = 'none'

    let ringX = 0
    let ringY = 0

    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top  = `${y}px`
      }
      ringX = x - 16
      ringY = y - 16
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top  = `${ringY}px`
      }
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.style.cursor = ''
    }
  }, [])

  if (!uiConfig.customCursor) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-[6px] h-[6px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'var(--accent)' }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-[32px] h-[32px] rounded-full border transition-all duration-100"
        style={{ borderColor: 'var(--accent)', opacity: 0.5 }}
      />
    </>
  )
}
