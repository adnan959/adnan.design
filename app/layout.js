import Script from 'next/script';
import './globals.scss';

export const metadata = {
  title: 'Adnan Khan | Product Designer',
  description: "I'm a passionate Product Designer who builds functional and compelling experiences for the web.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-57968730-3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-57968730-3');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
