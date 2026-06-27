import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function Contact() {
  const headingParts = content.contact.heading.split('\n')
  return (
    <section
      id="contact"
      data-section="contact"
      className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto text-center"
    >
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.contact.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
          {headingParts[0]}
          <br />
          {headingParts[1]}
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <p className="max-w-[46ch] mx-auto text-[16px] leading-[1.7] mb-10" style={{ color: 'var(--muted)' }}>
          {content.contact.body}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={180}>
        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${content.contact.email}`}
            className="font-mono text-[18px] font-semibold no-underline transition-colors duration-200 hover:opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            {content.contact.email} →
          </a>
          <div className="flex gap-6 font-mono text-[14px]">
            {content.contact.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-200 hover:text-accent"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
