import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://xvannn07.xyz'),
  title: 'Ekspann',
  description: 'My Personal Portfolio',
  openGraph: {
    type: 'website',
    url: 'https://xvannn07.xyz',
    title: 'Ekspann',
    description: 'My Personal Portfolio',
    images: [
      {
        url: 'https://xvannn07.xyz/img/xvann_logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Ekspann',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekspann',
    description: 'My Personal Portfolio',
    images: ['https://xvannn07.xyz/img/xvann_logo.png'],
  },
  icons: {
    icon: '/img/xvann_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
