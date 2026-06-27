'use client'
import { useEffect, useState } from 'react'
import content from '@/data/content.json'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = content.nav.links.map((l) => l.href.replace('#', ''))
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0, rootMargin: '-45% 0px -50% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(20px,5vw,64px)] py-5 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,9,12,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <a
        href="#"
        className="font-mono text-sm font-bold tracking-tight"
        style={{ color: 'var(--accent)' }}
      >
        &gt;_ rishav
      </a>

      <div className="flex items-center gap-[clamp(14px,2.4vw,30px)]">
        {content.nav.links.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = activeSection === id
          return (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] no-underline transition-colors duration-200 hidden sm:inline"
              style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
            >
              <span style={{ color: 'var(--accent)', opacity: 0.7 }}>{link.num}.</span>{' '}
              {link.label}
            </a>
          )
        })}
        <a
          href={content.nav.cta.href}
          className="font-mono text-[13px] font-semibold no-underline rounded-lg px-[14px] py-2 border transition-all duration-200 hover:bg-white/5"
          style={{ color: 'var(--accent)', borderColor: 'rgba(46,230,166,0.4)' }}
        >
          {content.nav.cta.label}
        </a>
      </div>
    </nav>
  )
}
