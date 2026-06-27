import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function Testimonials() {
  return (
    <section className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto">
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.testimonials.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[clamp(40px,6vw,64px)]">
          {content.testimonials.heading}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.testimonials.quotes.map((quote, i) => (
          <ScrollReveal key={i} delay={60 * (i + 1)}>
            <figure
              className="rounded-[14px] p-6 h-full flex flex-col gap-4"
              style={{
                border: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              }}
            >
              <div className="text-[28px]" style={{ color: 'var(--accent)', opacity: 0.5 }}>"</div>
              <blockquote className="text-[15px] leading-[1.75] flex-1" style={{ color: 'var(--muted)' }}>
                {quote.text}
              </blockquote>
              <figcaption className="font-mono text-[13px]">
                <span className="font-semibold">{quote.author}</span>
                <span style={{ color: 'var(--muted)' }}> · {quote.role}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
