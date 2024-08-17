// // pages/_document.js
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { Inter } from 'next/font/google';

// // Load the Inter font from Google Fonts
// const inter = Inter({ subsets: ['latin'] });

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           {/* Preconnect to Google Fonts */}
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
//           {/* Link to external fonts */}
//           <link
//             href="https://fonts.googleapis.com/css2?family=Annapurna+SIL:wght@400;700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Martel:wght@200;300;400;600;700;800;900&family=Yatra+One&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className={inter.className}>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
