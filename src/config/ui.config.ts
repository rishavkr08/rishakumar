// ─────────────────────────────────────────────
// UI Configuration — tweak visual behaviour here
// without touching any component code.
// ─────────────────────────────────────────────

export const uiConfig = {
  // Accent colour applied as --accent CSS variable throughout the site.
  // Options: '#2ee6a6' (mint green) | '#38bdf8' (sky blue) |
  //          '#a78bfa' (violet)     | '#fb923c' (orange)
  accent: '#fb923c',

  // Background colour (dark canvas).
  // Options: '#07090c' (near-black) | '#0a0f1a' (deep navy) | '#0d0d0d' (pure dark)
  background: '#07090c',

  // Muted text colour for labels, secondary copy.
  // Options: '#6b7a8d' | '#4a5568' | '#718096'
  muted: '#6b7a8d',

  // Card / surface border colour.
  // Options: 'rgba(255,255,255,0.08)' (subtle) | 'rgba(255,255,255,0.14)' (visible)
  border: 'rgba(255,255,255,0.08)',

  // Primary (sans-serif) font — used for headings and body.
  // Options: 'Space Grotesk' | 'Inter' | 'DM Sans'
  fontSans: 'Space Grotesk',

  // Monospace font — used for labels, code blocks, nav numbers.
  // Options: 'JetBrains Mono' | 'Fira Code' | 'Source Code Pro'
  fontMono: 'JetBrains Mono',

  // Show floating particle constellation in the background.
  // Particles draw lines to each other and to the mouse cursor.
  // Set false to disable for reduced-motion preference or simpler look.
  showParticles: true,

  // Custom ring cursor that follows the mouse.
  // Set false to use the default OS cursor.
  customCursor: true,

  // Scroll-reveal animation duration in ms.
  // Options: 400 (snappy) | 680 (default, smooth) | 900 (slow, dramatic)
  revealDuration: 680,

  // Typing animation speed in ms per character.
  // Options: 60 (fast) | 100 (default) | 150 (deliberate)
  typingSpeed: 100,
} as const

export type UIConfig = typeof uiConfig
