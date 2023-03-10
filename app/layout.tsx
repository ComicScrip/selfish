import './globals.css';
import React from 'react';
import QueryProvider from './contexts/QueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=" bg-zinc-900">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Selfish',
  description: 'A selfie upload app',
};
