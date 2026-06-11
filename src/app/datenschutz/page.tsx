import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Handwerk Niendorf",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-4 font-display text-2xl font-bold leading-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-2 font-display text-lg font-bold">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>;
}

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1 border-t border-line-strong">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="label text-accent">Rechtliches</p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
            Datenschutz&shy;erklärung
          </h1>
          <p className="mt-5 text-sm text-ink-soft">Stand: Juni 2026</p>

          <H2>1. Datenschutz auf einen Blick</H2>

          <H3>Allgemeine Hinweise</H3>
          <P>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie der unter diesem Text
            aufgeführten Datenschutzerklärung.
          </P>

          <H3>Datenerfassung auf dieser Website</H3>
          <P>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>{" "}
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung
            entnehmen.
          </P>
          <P>
            <strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten werden zum
            einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
            sich z. B. um Daten handeln, die Sie in das Kontaktformular eingeben.
            Andere Daten werden beim Besuch der Website automatisch durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </P>
          <P>
            <strong>Wofür nutzen wir Ihre Daten?</strong> Ein Teil der Daten wird
            erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten verwenden wir, um Ihre Anfrage zu
            bearbeiten.
          </P>
          <P>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong> Sie
            haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
            zum Thema Datenschutz können Sie sich jederzeit an uns wenden. Des
            Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </P>

          <H2>2. Hosting</H2>
          <P>
            Wir hosten die Inhalte unserer Website beim folgenden Anbieter:
          </P>
          <H3>Vercel</H3>
          <P>
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA (nachfolgend „Vercel“). Wenn Sie unsere Website besuchen,
            werden Ihre personenbezogenen Daten (z. B. IP-Adresse) auf den
            Servern von Vercel verarbeitet. Die statischen Inhalte der Website
            werden über ein weltweites Content-Delivery-Netzwerk ausgeliefert;
            die serverseitige Verarbeitung von Formulareingaben ist auf einen
            Standort innerhalb der Europäischen Union (Frankfurt am Main)
            konfiguriert.
          </P>
          <P>
            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
            zuverlässigen Darstellung unserer Website.
          </P>
          <P>
            <strong>Auftragsverarbeitung.</strong> Wir haben einen Vertrag über
            Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter
            geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
            vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
            personenbezogenen Daten unserer Websitebesucher nur nach unseren
            Weisungen und unter Einhaltung der DSGVO verarbeitet. Die etwaige
            Datenübermittlung in die USA wird auf das EU-U.S. Data Privacy
            Framework sowie auf Standardvertragsklauseln gestützt.
          </P>

          <H2>3. Allgemeine Hinweise und Pflichtinformationen</H2>

          <H3>Datenschutz</H3>
          <P>
            Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten
            sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
            und entsprechend den gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung. Wir weisen darauf hin, dass die
            Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
            vor dem Zugriff durch Dritte ist nicht möglich.
          </P>

          <H3>Hinweis zur verantwortlichen Stelle</H3>
          <P>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </P>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            Jan Heinemeyer
            <br />
            Margaretha-Rothe-Weg 11
            <br />
            22455 Hamburg
            <br />
            <br />
            Telefon: [Ihre Telefonnummer einsetzen]
            <br />
            E-Mail: [Ihre E-Mail-Adresse einsetzen]
          </address>
          <P>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet.
          </P>

          <H3>Speicherdauer</H3>
          <P>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z. B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die Löschung nach Fortfall dieser Gründe.
          </P>

          <H3>Rechtsgrundlagen der Datenverarbeitung</H3>
          <P>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
            a DSGVO. Im Falle einer ausdrücklichen Einwilligung in die
            Übertragung personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
            DSGVO. Sind Daten zur Vertragserfüllung oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten
            auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Im Übrigen werden Ihre
            Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1
            lit. f DSGVO) verarbeitet.
          </P>

          <H3>Empfänger von personenbezogenen Daten</H3>
          <P>
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
            externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
            von personenbezogenen Daten an diese externen Stellen erforderlich.
            Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
            wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn
            wir gesetzlich hierzu verpflichtet sind, wenn wir ein berechtigtes
            Interesse an der Weitergabe haben oder wenn eine sonstige
            Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
            Auftragsverarbeitern geben wir personenbezogene Daten nur auf
            Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.
          </P>

          <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
          <P>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </P>

          <H3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
            (Art. 21 DSGVO)
          </H3>
          <P>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE
            SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
            IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. DIE JEWEILIGE
            RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
            DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
            SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
            VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
            ÜBERWIEGEN, ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
            ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
            1 DSGVO).
          </P>

          <H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</H3>
          <P>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe. Die für uns zuständige Aufsichtsbehörde
            ist: Der Hamburgische Beauftragte für Datenschutz und
            Informationsfreiheit, Ludwig-Erhard-Straße 22, 20459 Hamburg.
          </P>

          <H3>Recht auf Datenübertragbarkeit</H3>
          <P>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
            an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
            es technisch machbar ist.
          </P>

          <H3>Auskunft, Berichtigung und Löschung</H3>
          <P>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
            das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
            der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
            Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </P>

          <H3>Recht auf Einschränkung der Verarbeitung</H3>
          <P>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
            an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
            den in Art. 18 Abs. 1 DSGVO genannten Fällen.
          </P>

          <H3>SSL- bzw. TLS-Verschlüsselung</H3>
          <P>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie
            an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an
            dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
            TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
            übermitteln, nicht von Dritten mitgelesen werden.
          </P>

          <H2>4. Datenerfassung auf dieser Website</H2>

          <H3>Server-Log-Dateien</H3>
          <P>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </P>
          <ul className="mt-3 space-y-1 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <P>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der technisch fehlerfreien Darstellung und der
            Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
            erfasst werden.
          </P>

          <H3>Kontaktformular</H3>
          <P>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten (Name, E-Mail-Adresse, ggf. Telefonnummer,
            gewünschte Leistung und Ihre Nachricht) zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </P>
          <P>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
            unserem berechtigten Interesse an der effektiven Bearbeitung der an
            uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt
            wurde; die Einwilligung ist jederzeit widerrufbar.
          </P>
          <P>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </P>
          <P>
            <strong>Speicherung bei Supabase.</strong> Zur Speicherung der über
            das Kontaktformular übermittelten Daten setzen wir den Dienst
            Supabase ein (Supabase, Inc., USA). Die Daten werden in einem
            Rechenzentrum innerhalb der Europäischen Union (Irland) gespeichert.
            Mit dem Anbieter haben wir einen Vertrag über Auftragsverarbeitung
            geschlossen. Soweit Daten an den Anbieter in einem Drittland (USA)
            verarbeitet werden, wird die Übermittlung auf Standardvertragsklauseln
            gestützt.
          </P>

          <H2>5. Google Search Console</H2>
          <P>
            Diese Website ist mit der Google Search Console verbunden, einem
            Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin
            4, Irland. Die Google Search Console dient ausschließlich der Analyse,
            wie unsere Website in den Google-Suchergebnissen erscheint (z. B.
            Suchanfragen, Häufigkeit von Einblendungen, Klickraten). Diese
            Auswertungen beruhen auf aggregierten Daten, die bei Google im Rahmen
            der Google-Suche anfallen. Über die Google Search Console werden keine
            Cookies auf Ihrem Endgerät gesetzt und keine personenbezogenen Daten
            der Besucher dieser Website durch uns erhoben oder an Google
            übermittelt. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Google unter{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
            .
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
