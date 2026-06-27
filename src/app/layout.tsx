import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import { uiConfig } from '@/config/ui.config'
import content from '@/data/content.json'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  metadataBase: new URL(content.meta.url),
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.url,
    siteName: 'Rishav Kumar',
    images: [{ url: content.meta.ogImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.title,
    description: content.meta.description,
    creator: content.meta.twitterHandle,
    images: [content.meta.ogImage],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rishav Kumar',
  url: content.meta.url,
  jobTitle: 'Full Stack Developer',
  description: content.meta.description,
  email: content.contact.email,
  sameAs: content.hero.socialLinks.map((l) => l.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = {
    '--accent': uiConfig.accent,
    '--bg': uiConfig.background,
    '--muted': uiConfig.muted,
    '--border': uiConfig.border,
    '--sans': `'${uiConfig.fontSans}', system-ui, sans-serif`,
    '--mono': `'${uiConfig.fontMono}', monospace`,
  } as React.CSSProperties

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={cssVars}>{children}</body>
    </html>
  )
}
