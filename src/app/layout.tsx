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
    default: "Marina Moscon | Psicóloga - CRP 16/8885",
    template: "%s | Marina Moscon",
  },
  description: "Terapia online profissional e aconselhamento psicológico para clientes internacionais. Melhore sua saúde mental e bem-estar de qualquer lugar do mundo. Agende sua sessão hoje",
keywords: [
"aconselhamento psicológico",
"terapia online",
"psicóloga online",
"terapia de saúde mental online",
"serviços de aconselhamento online",
"psicoterapia online",
"terapeuta que fala inglês"
],
  authors: [{ name: "Marina Moscon" }],
  openGraph: {
    title: "Terapia Online e Aconselhamento em Saúde Mental | Marina Moscon",
    description: "Suporte psicológico online especializado e feito sob medida para você, não importa onde você esteja no mundo. Dê o primeiro passo em direção a uma melhor saúde mental e agende sua consulta.",
    url: "https://www.marinamoscon.com.br",
    siteName: "Marina Moscon | Psicóloga - CRP 16/8885",
    images: [
      {
        url: "https://www.marinamoscon.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marina Moscon | Psicóloga - CRP 16/8885",
      },
    ],
    locale: "pt_BR", 
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
