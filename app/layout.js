import './globals.scss';

export const metadata = {
  title: {
    default: 'Adnan Khan | Staff Product Designer at Meta',
    template: '%s | Adnan Khan',
  },
  description: "Staff Product Designer at Meta with 16+ years of experience. Portfolio featuring enterprise platforms, VR experiences, and collaboration tools shipped to millions of users.",
  metadataBase: new URL('https://adnan.design'),
  openGraph: {
    title: 'Adnan Khan | Staff Product Designer at Meta',
    description: 'Staff Product Designer at Meta with 16+ years of experience building products at scale.',
    url: 'https://adnan.design',
    siteName: 'Adnan Khan',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/adnan-avatar.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/adnan-avatar.jpeg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: '/images/adnan-avatar.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
