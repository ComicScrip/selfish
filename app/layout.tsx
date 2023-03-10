import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=" bg-zinc-900">{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Selfish',
  description: 'A selfie upload app',
};
