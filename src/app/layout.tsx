import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sarau Luxury — Event Organizer Outing & Outbound Perusahaan',
  description: 'Jasa outing, outbound training & company gathering terpercaya sejak 2018. 100+ klien korporat. Konsultasi gratis!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ '--font-display': "'Playfair Display', serif", '--font-body': "'Jost', sans-serif" } as React.CSSProperties}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
