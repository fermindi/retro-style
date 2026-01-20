import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Retro Style - Design System',
  description: 'A retro/vintage design system inspired by classic computing hardware',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
