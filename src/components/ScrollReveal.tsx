'use client'
import { useEffect, useRef, ReactNode } from 'react'
import { uiConfig } from '@/config/ui.config'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      setTimeout(() => {
        el.classList.add('is-revealed')
      }, delay)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal()
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      reveal()
    } else {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{ transitionDuration: `${uiConfig.revealDuration}ms`, ...style }}
    >
      {children}
    </div>
  )
}
