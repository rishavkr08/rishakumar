import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function Experience() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto"
    >
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.experience.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[clamp(40px,6vw,64px)]">
          {content.experience.heading}
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-[1px]"
          style={{ background: 'var(--border)' }}
        />

        <div className="flex flex-col gap-10 pl-10">
          {content.experience.items.map((item, i) => (
            <ScrollReveal key={i} delay={80 * i}>
              <div className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-[37px] top-[6px] w-[15px] h-[15px] rounded-full border-2"
                  style={{
                    borderColor: 'var(--accent)',
                    background: 'var(--bg)',
                    boxShadow: '0 0 8px rgba(46,230,166,0.3)',
                  }}
                />
                <div className="font-mono text-[12px] mb-1" style={{ color: 'var(--muted)' }}>{item.period}</div>
                <h3 className="text-[17px] font-bold mb-1">
                  {item.role}
                  {item.company && (
                    <>
                      {' · '}
                      <span style={{ color: 'var(--accent)' }}>{item.company}</span>
                    </>
                  )}
                </h3>
                <p className="text-[14.5px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
