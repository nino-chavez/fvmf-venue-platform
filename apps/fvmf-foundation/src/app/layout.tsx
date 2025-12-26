import type { Metadata } from 'next'
import { bebasNeue, ibmPlexSans, ibmPlexMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fox Valley Music Foundation | Empowering Students Through Music Education',
  description: 'Supporting music education in the Fox Valley. Instruments, instruction, and inspiration for students who need it most.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
