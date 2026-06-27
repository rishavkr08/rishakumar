'use client'
import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'
import { uiConfig } from '@/config/ui.config'

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const phrases = content.hero.typingPhrases
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const phrase = phrases[phraseIdx]
      if (typedRef.current) {
        typedRef.current.textContent = phrase.slice(0, charIdx)
      }
      if (!deleting && charIdx < phrase.length) {
        charIdx++
        timer = setTimeout(tick, uiConfig.typingSpeed)
      } else if (!deleting && charIdx === phrase.length) {
        timer = setTimeout(() => { deleting = true; tick() }, 1800)
      } else if (deleting && charIdx > 0) {
        charIdx--
        timer = setTimeout(tick, uiConfig.typingSpeed / 2)
      } else {
        deleting = false
        phraseIdx = (phraseIdx + 1) % phrases.length
        timer = setTimeout(tick, 400)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  const nameParts = content.hero.name.split('\n')

  return (
    <section className="relative z-10 min-h-screen flex items-center px-[clamp(20px,5vw,64px)] pt-[120px] pb-20 max-w-[1180px] mx-auto">
      <div className="flex flex-wrap gap-[clamp(32px,5vw,72px)] items-center w-full">
        {/* Left: copy */}
        <div className="flex-1 min-w-[300px]" style={{ flexBasis: '440px' }}>
          <ScrollReveal>
            <div className="font-mono text-sm mb-[22px] tracking-[0.02em]" style={{ color: 'var(--accent)' }}>
              {content.hero.greeting}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-[clamp(44px,7.5vw,88px)] leading-[0.98] font-bold tracking-[-0.03em]">
              {nameParts[0]}
              <br />
              {nameParts[1]}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-6 text-[clamp(18px,2.6vw,26px)] font-medium">
              I am{' '}
              <span ref={typedRef} style={{ color: 'var(--accent)' }} />
              <span
                className="inline-block w-[9px] ml-[3px] align-[-2px]"
                style={{
                  height: '1.05em',
                  background: 'var(--accent)',
                  animation: 'blink 1s steps(1) infinite',
                }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className="mt-[22px] max-w-[46ch] text-[16px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
              {content.hero.bio.split(content.hero.bioHighlight).map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span style={{ color: 'var(--text)' }}>{content.hero.bioHighlight}</span>
                    {part}
                  </span>
                )
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-[14px] mt-[34px]">
              <a
                href={content.hero.cta.primaryHref}
                className="no-underline font-mono text-sm font-semibold px-[22px] py-[13px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,230,166,0.35)]"
                style={{ background: 'var(--accent)', color: '#05130d' }}
              >
                {content.hero.cta.primary}
              </a>
              <a
                href={content.hero.cta.secondaryHref}
                className="no-underline font-mono text-sm font-semibold px-[22px] py-[13px] rounded-[10px] border transition-all duration-200 hover:border-accent hover:text-accent"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                {content.hero.cta.secondary}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={360}>
            <div className="flex flex-wrap gap-5 mt-[30px] font-mono text-[13px]">
              {content.hero.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors duration-200 hover:text-accent"
                  style={{ color: 'var(--muted)' }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: terminal card */}
        <ScrollReveal delay={200} className="flex-1 min-w-[300px]" style={{ flexBasis: '360px' }}>
          <div
            className="rounded-[14px] overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'linear-gradient(180deg, rgba(20,26,33,0.9), rgba(11,15,20,0.92))',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              animation: 'floaty 7s ease-in-out infinite',
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-[13px]"
              style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f56]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#27c93f]" />
              <span className="ml-[10px] font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
                {content.hero.card.filename}
              </span>
            </div>
            {/* Code body */}
            <div className="p-[22px] font-mono text-[13.5px] leading-[2]">
              <div>
                <span style={{ color: 'var(--muted)' }}>const </span>
                <span style={{ color: '#7fd1ff' }}>rishav</span>
                <span style={{ color: 'var(--muted)' }}> = {'{'}</span>
              </div>
              {content.hero.card.fields.map((f) => (
                <div key={f.key} className="pl-[22px]">
                  <span style={{ color: 'var(--muted)' }}>{f.key}: </span>
                  {(f.type === 'string' || f.type === 'array') && (
                    <span style={{ color: 'var(--accent)' }}>{f.value}</span>
                  )}
                  {f.type === 'keyword' && (
                    <span style={{ color: '#7fd1ff' }}>{f.value}</span>
                  )}
                  <span style={{ color: 'var(--muted)' }}>,</span>
                </div>
              ))}
              <div><span style={{ color: 'var(--muted)' }}>{'};'}</span></div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-underline font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: 'var(--muted)' }}
      >
        scroll
        <span
          className="w-[22px] h-[34px] rounded-full flex items-start justify-center pt-[6px]"
          style={{ border: '1.5px solid var(--border)' }}
        >
          <span
            className="w-1 h-[7px] rounded-full"
            style={{ background: 'var(--accent)', animation: 'floaty 1.5s ease-in-out infinite' }}
          />
        </span>
      </a>
    </section>
  )
}
