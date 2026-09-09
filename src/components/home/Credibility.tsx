import { Reveal } from "./Reveal";

const partners = [
  "NEW TO THE STREET",
  "aws startups",
  "Google for Startups",
  "NIST",
  "NYSE",
  "Interlink Foundation",
];

export function Credibility() {
  return (
    <section id="credibility" className="bg-background py-24">
      <div className="mx-auto max-w-[1400px] px-5 text-center lg:px-10">
        <Reveal>
          <p className="bg-gradient-brand bg-clip-text text-[2rem] font-extrabold tracking-tight text-transparent lg:text-[2.6rem]">
            Institutional Credibility
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
            Trusted by the world's best.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
            Independently verified by the institutions that define global standards.
          </p>
        </Reveal>

        <p className="mt-14 text-xs font-bold tracking-[0.28em] text-muted-foreground">TRUSTED BY</p>

        <div className="marquee mt-8">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-5 pr-5" aria-hidden={dup === 1}>
                {partners.map((p) => (
                  <div
                    key={`${dup}-${p}`}
                    className="grid h-24 w-56 place-items-center rounded-2xl border border-border bg-card px-6 text-center text-sm font-bold uppercase tracking-wide text-foreground/70 shadow-soft transition-colors duration-300 hover:text-primary"
                  >
                    {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
