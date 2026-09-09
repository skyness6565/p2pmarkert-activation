import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-marketplace.jpg";

const locations = [
  { flag: "🇳🇬", city: "Lagos, Nigeria" },
  { flag: "🇨🇦", city: "Montreal, Canada" },
  { flag: "🇩🇪", city: "Neu-Isenburg, Germany" },
  { flag: "🇰🇪", city: "Nairobi, Kenya" },
  { flag: "🇮🇳", city: "Mumbai, India" },
  { flag: "🇧🇷", city: "São Paulo, Brazil" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % locations.length), 3200);
    return () => clearInterval(t);
  }, []);

  const loc = locations[i] ?? locations[0]!;

  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="People trading in a busy street marketplace"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full animate-ken-burns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 pt-20 lg:px-10">
        <div
          key={i}
          className="absolute right-5 top-28 flex animate-fade-in items-center gap-2 rounded-full bg-ink/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md lg:right-10"
        >
          <span aria-hidden="true">{loc.flag}</span>
          {loc.city}
        </div>

        <h1 className="max-w-[16ch] animate-rise text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[3rem] lg:text-[3.6rem]">
          Activating Marketplace on your Interlink Wallet allows you to securely trade your ITG
          assets with other, using Interlink Escrow services
        </h1>

        <div className="mt-9 animate-rise [animation-delay:180ms] [animation-fill-mode:both]">
          <a
            href="#download"
            className="inline-flex rounded-full bg-ink px-9 py-4 text-sm font-bold text-white shadow-float transition-transform duration-300 hover:-translate-y-1"
          >
            Download
          </a>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-y-16 animate-float items-center gap-3 rounded-full bg-white px-6 py-4 shadow-float lg:flex">
          <span className="size-7 animate-spin-coin rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-inner" />
          <span className="text-lg font-extrabold text-emerald-600">$ITL Activate Marketplace</span>
        </div>
      </div>
    </section>
  );
}
