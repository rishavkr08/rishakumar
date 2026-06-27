import ScrollReveal from './ScrollReveal'
import content from '@/data/content.json'

export default function Work() {
  return (
    <section
      id="work"
      data-section="work"
      className="py-[clamp(80px,12vw,140px)] px-[clamp(20px,5vw,64px)] max-w-[1180px] mx-auto"
    >
      <ScrollReveal>
        <div className="font-mono text-[13px] mb-6 tracking-[0.04em]" style={{ color: 'var(--accent)', opacity: 0.8 }}>
          {content.work.sectionLabel}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[clamp(40px,6vw,64px)]">
          {content.work.heading}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.work.projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={60 * ((i % 3) + 1)}>
            <article
              className="rounded-[14px] p-6 h-full flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              style={{
                border: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px]" style={{ color: 'var(--accent)', opacity: 0.6 }}>{project.num}</span>
                <a
                  href={project.href}
                  className="font-mono text-[12px] no-underline transition-colors duration-200 hover:text-accent"
                  style={{ color: 'var(--muted)' }}
                  aria-label={`View ${project.title}`}
                >
                  {'</>'} →
                </a>
              </div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em]">{project.title}</h3>
              <p className="text-[14px] leading-[1.7] flex-1" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
