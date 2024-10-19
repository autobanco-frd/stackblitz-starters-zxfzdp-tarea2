import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-indigo-300 p-4 shadow">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="https://heavyduty.builders/" target="_blank">
                <Image
                  src="/logo.png"
                  width={30}
                  height={30}
                  alt="Logo"
                ></Image>
              </a>
              <Link href="/">
                <button className="text-black hover:text-white font-semibold text-m">
                  Inicio
                </button>
              </Link>
              <Link href="/modal">
                <button className="text-black hover:text-white font-semibold text-m">
                  Modal
                </button>
              </Link>
              <Link href="/formulario">
                <button className="text-black hover:text-white font-semibold text-m">
                  Formulario
                </button>
              </Link>
              <Link href="/prices">
                <button className="text-black hover:text-white font-semibold text-m">
                  Precios
                </button>
              </Link>
              <Link href="/aboutme">
                <button className="text-black hover:text-white font-semibold text-m">
                  Sobre mi
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
