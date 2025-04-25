import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ekspann',
  description: 'My Personal Portfolio',
  generator: 'Xva',
  openGraph: {
    images: 'public/img/xvann_logo.png',
  },
  icons: {
    icon: '/img/xvann_logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
