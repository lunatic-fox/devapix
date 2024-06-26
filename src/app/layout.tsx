import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devapix',
  description: 'Devicon API',
  metadataBase: new URL('https://devapix.vercel.app/'),
  icons: { icon: '/img/logo.svg' },
  openGraph: {
    type: 'website',
    images: [
      '/img/banner.png'
    ]
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
