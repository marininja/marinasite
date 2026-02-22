import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const gtmId = "GTM-MNCL9DDD"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marina Moscon | Psychologist - CRP 16/8885",
    template: "%s | Marina Moscon",
  },
  description: "Professional online therapy and psychological counseling for international clients. Improve your mental health and well-being from anywhere in the world. Book your session today",
  keywords: [
    "psychological counseling", 
    "online therapy", 
    "online psychologist", 
    "mental health therapy online", 
    "online counseling services", 
    "psychotherapy online",
    "english speaking therapist"
  ],
  authors: [{ name: "Marina Moscon" }],
  openGraph: {
    title: "Online Therapy & Mental Health Counseling | Marina Moscon",
    description: "Expert online psychological support tailored for you, no matter where you are in the world. Take the first step towards better mental health and schedule your consultation.",
    url: "https://www.marinamoscon.com.br",
    siteName: "Marina Moscon | Psychologist - CRP 16/8885",
    images: [
      {
        url: "https://www.marinamoscon.com.br/og-image.jpg", // Crie uma imagem 1200x630 para quando o link for compartilhado no WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: "Marina Moscon | Psychologist - CRP 16/8885",
      },
    ],
    locale: "en_US", 
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.marinamoscon.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
        `,
        }}
      />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe className= 'display:none visibility:hidden'
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0" 
          width="0"
          >
          </iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
