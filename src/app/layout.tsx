import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alex Lai - Lead Software Engineer',
  description: 'Lead Software Engineer with 8+ years of experience in Python and AI Platforms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
