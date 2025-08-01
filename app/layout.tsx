import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JUT Ranchi - Jharkhand University of Technology',
  description: 'Official website of Jharkhand University of Technology, Ranchi. Empowering students with quality education and innovative learning.',
  keywords: 'JUT Ranchi, Jharkhand University of Technology, Engineering, Education, Ranchi, Jharkhand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
} 