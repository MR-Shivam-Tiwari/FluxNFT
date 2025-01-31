import { Inter } from 'next/font/google';
import '../globals.css'; // Import global styles
import Navbar from './Navbar';
import Footer from './Footer';
import Script from 'next/script'; // Import Script component

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
        <link rel="icon" type="image/png" href="/homeimage/shashtrasangrahlogo.png" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WLLG8JXF');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F08EGV49EE" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F08EGV49EE');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLLG8JXF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar /> {/* Global Navbar */}
        <main className="pt-8">{children}</main> {/* Main content area */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
