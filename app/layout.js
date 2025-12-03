import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextStore - Your Ultimate Shopping Destination',
  description: 'Discover amazing products at unbeatable prices. Shop the latest trends and exclusive deals at NextStore.',
  keywords: 'shopping, online store, products, ecommerce, nextjs',
  authors: [{ name: 'NextStore Team' }],
  openGraph: {
    title: 'NextStore - Your Ultimate Shopping Destination',
    description: 'Discover amazing products at unbeatable prices',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextStore - Your Ultimate Shopping Destination',
    description: 'Discover amazing products at unbeatable prices',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
        <Toaster position="top-right" />
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 NextStore. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}