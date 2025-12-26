import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fox Valley Music Foundation',
  description: 'Supporting music education in the Fox Valley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
