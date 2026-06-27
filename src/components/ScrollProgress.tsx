'use client'
import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = (h.scrollHeight - h.clientHeight) || 1
      const p = Math.min(1, window.scrollY / max)
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{ background: 'var(--accent)', transform: 'scaleX(0)' }}
    />
  )
}
