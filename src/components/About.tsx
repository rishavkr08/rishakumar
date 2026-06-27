import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function About() {
  const headingParts = content.about.heading.split('\n')
  return (
    <section
      id="about"
      data-section="about"
      className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto"
    >
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.about.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[clamp(40px,6vw,64px)]">
          {headingParts[0]}
          <br />
          {headingParts[1]}
        </h2>
      </ScrollReveal>

      <div className="flex flex-wrap gap-[clamp(30px,5vw,64px)]">
        <ScrollReveal
          delay={100}
          className="flex-1 min-w-[300px] text-[16.5px] leading-[1.85]"
          style={{ flexBasis: '440px', color: 'var(--muted)' }}
        >
          {content.about.paragraphs.map((p, i) => (
            <p key={i} className={i > 0 ? 'mt-[18px]' : ''}>{p}</p>
          ))}
        </ScrollReveal>

        <ScrollReveal
          delay={180}
          className="flex-1 min-w-[280px]"
          style={{ flexBasis: '320px' }}
        >
          <div
            className="rounded-[14px] p-6 font-mono text-[13.5px]"
            style={{
              border: '1px solid var(--border)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012))',
            }}
          >
            {content.about.stats.map((stat, i) => (
              <div
                key={stat.key}
                className="flex justify-between py-[11px]"
                style={{ borderBottom: i < content.about.stats.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span style={{ color: 'var(--muted)' }}>{stat.key}</span>
                <span>{stat.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
