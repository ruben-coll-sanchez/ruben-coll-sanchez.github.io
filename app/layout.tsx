import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rubén Coll Sánchez — Personal Webpage',
  description:
    'Rubén Coll Sánchez is a junior researcher and engineer at Huawei Paris, working at the intersection of programming languages theory, high-performance computing, and computer systems.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/images/logo_RCS.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#f7f8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
