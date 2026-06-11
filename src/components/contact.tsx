import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="kontakt" className="border-y border-line-strong bg-paper-2/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="label text-accent">04 — Kontakt</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95]">
            Anfrage
            <br />
            starten
          </h2>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink-soft">
            Schildern Sie kurz Ihr Vorhaben. Wir melden uns binnen 24 Stunden und
            vermitteln Ihnen passende Betriebe aus der Region.
          </p>

          <dl className="mt-12 space-y-px border border-line bg-line">
            {[
              ["Telefon", "040 123 456", "tel:+4940123456"],
              ["E-Mail", "hallo@handwerk-niendorf.de", "mailto:hallo@handwerk-niendorf.de"],
              ["Vermittlungsgebiet", "Hamburg & Umgebung", null],
              ["Zeiten", "Mo–Fr 7–18 Uhr", null],
            ].map(([label, value, href]) => (
              <div
                key={label as string}
                className="flex items-baseline justify-between gap-4 bg-paper px-5 py-4"
              >
                <dt className="label text-ink-soft">{label}</dt>
                <dd className="text-right font-medium">
                  {href ? (
                    <a
                      href={href as string}
                      className="transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border border-line-strong bg-paper p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
