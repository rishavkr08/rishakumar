import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function Stack() {
  return (
    <section
      id="stack"
      data-section="stack"
      className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto"
    >
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.stack.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[clamp(40px,6vw,64px)]">
          {content.stack.heading}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.stack.categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={60 * ((i % 3) + 1)}>
            <div
              className="rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))',
              }}
            >
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--accent)', opacity: 0.7 }}>
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[13px] px-3 py-1 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
