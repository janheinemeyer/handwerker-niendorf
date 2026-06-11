import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handwerk Niendorf · Handwerker finden in Hamburg",
  description:
    "Wir vermitteln Ihnen geprüfte Handwerksbetriebe aus Hamburg-Niendorf und Umgebung – für Renovierung, Maler-, Trockenbau-, Fliesen- und Montagearbeiten. Kostenlos und unverbindlich anfragen.",
  openGraph: {
    title: "Handwerk Niendorf",
    description:
      "Geprüfte Handwerksbetriebe aus Hamburg-Niendorf finden. Kostenlos und unverbindlich.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${hanken.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col">{children}</body>
    </html>
  );
}
