import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Impressum · Handwerk Niendorf",
  description: "Anbieterkennzeichnung gemäß § 5 DDG.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-3 font-display text-xl font-bold leading-tight">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>;
}

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1 border-t border-line-strong">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="label text-accent">Rechtliches</p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
            Impressum
          </h1>

          <H2>Angaben gemäß § 5 DDG</H2>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            Jan Heinemeyer
            <br />
            Margaretha-Rothe-Weg 11
            <br />
            22455 Hamburg
          </address>

          <H2>Kontakt</H2>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            Telefon: [Ihre Telefonnummer einsetzen]
            <br />
            E-Mail: [Ihre E-Mail-Adresse einsetzen]
          </address>

          <H2>Umsatzsteuer-Identifikationsnummer</H2>
          <P>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz:
            <br />
            [USt-IdNr. einsetzen – falls keine vorhanden (Kleinunternehmer nach
            § 19 UStG), diesen Abschnitt vollständig entfernen]
          </P>

          <H2>Redaktionell verantwortlich (§ 18 Abs. 2 MStV)</H2>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            Jan Heinemeyer
            <br />
            Margaretha-Rothe-Weg 11
            <br />
            22455 Hamburg
          </address>

          <H2>Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</H2>
          <P>
            Unsere zentrale Kontaktstelle für Nutzerinnen und Nutzer sowie für
            Behörden nach Art. 11 und Art. 12 der Verordnung (EU) 2022/2065
            (Digital Services Act) erreichen Sie per E-Mail unter [Ihre
            E-Mail-Adresse einsetzen]. Die Kommunikation ist in deutscher und
            englischer Sprache möglich.
          </P>

          <H2>Hinweis zum Vermittlungsangebot</H2>
          <P>
            Diese Website ist ein Vermittlungsangebot. Wir erbringen die
            dargestellten Handwerksleistungen nicht selbst, sondern stellen den
            Kontakt zwischen Interessentinnen und Interessenten und unabhängigen
            Dienstleistern (Handwerksbetrieben) her. Verträge über die
            Ausführung von Leistungen kommen ausschließlich unmittelbar zwischen
            der interessierten Person und dem jeweiligen Dienstleister zustande.
            Für die ordnungsgemäße Ausführung der Leistungen sowie für etwaige
            erforderliche Eintragungen in die Handwerksrolle sind allein die
            jeweiligen Dienstleister verantwortlich.
          </P>

          <H2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</H2>
          <P>
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </P>

          <H2>Haftung für Inhalte</H2>
          <P>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </P>

          <H2>Haftung für Links</H2>
          <P>
            Unser Angebot enthält gegebenenfalls Links zu externen Websites
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </P>

          <H2>Urheberrecht</H2>
          <P>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet.
          </P>

          <div className="mt-16 border-t border-line pt-6">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:text-ink"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
