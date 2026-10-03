import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mafile — A considered collection',
  description: 'Cinema, objects, and people shaping the Mafile point of view.',
  metadataBase: new URL('https://mafile.store'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Mafile', description: 'A considered collection of cinema, objects, and people.', type: 'website', siteName: 'Mafile' },
  twitter: { card: 'summary_large_image', title: 'Mafile', description: 'A considered collection of cinema, objects, and people.' },
}
