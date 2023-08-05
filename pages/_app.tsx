import '@/styles/globals.css';

import React from 'react';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div className='p-10'>
          <Component {...pageProps} />
        </div>
      </body>
    </html>
  );
};

export default MyApp;
