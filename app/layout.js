import { Inter } from 'next/font/google';
import '../globals.css'; // Import global styles
import Navbar from './Navbar';
import Footer from './Footer';

// Load the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShastraSangrah',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Link to external fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Annapurna+SIL:wght@400;700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Martel:wght@200;300;400;600;700;800;900&family=Yatra+One&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link className='' rel="icon" type="image/png" href="/homeimage/shashtrasangrahlogo.png" />
        {/* <link rel="alternate icon" type="image/png" href="/favicon.ico" /> */}

      </head>

      <body className={inter.className}>
        <Navbar /> {/* Global Navbar */}
        <main className="pt-8">{children}</main> {/* Main content area */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
