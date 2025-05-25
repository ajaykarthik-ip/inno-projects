import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inno Projects',
  description: 'Platform for final year project ideas and resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}