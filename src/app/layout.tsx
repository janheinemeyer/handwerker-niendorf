import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { RequestProvider } from "@/lib/request-context";
import { SITE_URL } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";
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
  // Resolves relative canonical/OpenGraph URLs (e.g. the Ratgeber pages'
  // `canonical: "/ratgeber/..."`) against the production domain instead of the
  // build-time localhost default. Hardcoded so preview deployments also emit
  // the canonical production host and don't compete for indexing.
  metadataBase: new URL(SITE_URL),
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
      <body className="relative min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <RequestProvider>{children}</RequestProvider>
      </body>
    </html>
  );
}
