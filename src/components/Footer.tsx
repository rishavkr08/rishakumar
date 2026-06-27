import content from '@/data/content.json'

export default function Footer() {
  const [before, after] = content.footer.copy.split('Code Blooded')
  return (
    <footer
      className="px-[clamp(20px,5vw,64px)] py-8 flex flex-wrap justify-between items-center gap-4 font-mono text-[13px]"
      style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}
    >
      <span>
        {before}
        <span style={{ color: 'var(--accent)' }}>Code Blooded</span>
        {after}
      </span>
      <span>
        Designed & built with care ·{' '}
        <a
          href="#"
          className="no-underline transition-colors duration-200 hover:text-accent"
          style={{ color: 'var(--muted)' }}
        >
          {content.footer.backToTop}
        </a>
      </span>
    </footer>
  )
}
