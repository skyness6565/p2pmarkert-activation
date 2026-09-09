import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  Home,
  LogIn,
  MoreVertical,
  Plus,
  Store,
  User,
  UsersRound,
  Wallet as WalletIcon,
  X,
} from "lucide-react";
import coinsSilver from "@/assets/app-coins-silver.png";
import coinGold from "@/assets/app-coin-gold.png";
import globeNetwork from "@/assets/app-globe-network.png";
import verifiedGold from "@/assets/app-verified-gold.jpg";

const title = "Mine $ITLG — InterLink App";
const description =
  "Mine $ITLG from your phone, track your balance, and secure the human network with the InterLink app.";

export const Route = createFileRoute("/mine")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MinePage,
});

function MinePage() {
  const [tab, setTab] = useState<"app" | "wallet">("app");

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.008_320)] font-sans antialiased">
      <div className="relative mx-auto min-h-screen w-full max-w-[520px] bg-[oklch(0.99_0.006_320)] pb-32 shadow-float">
        {/* top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 bg-[oklch(0.99_0.006_320)]/90 px-4 py-3 backdrop-blur-xl">
          <Link
            to="/"
            aria-label="InterLink home"
            className="grid size-10 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
              <path
                d="M6 15a5 5 0 0 1 5-5h2a5 5 0 0 1 0 10h-2"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="8" cy="7" r="2.6" fill="currentColor" />
            </svg>
          </Link>

          <div className="relative flex flex-1 max-w-[290px] rounded-full bg-accent p-1">
            <span
              className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-card shadow-soft transition-transform duration-500 ${
                tab === "wallet" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            {(["app", "wallet"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative z-10 flex-1 rounded-full py-2 text-sm font-bold capitalize transition-colors ${
                  tab === t ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            aria-label="Account"
            className="grid size-10 place-items-center rounded-full bg-accent text-foreground/70 transition-colors hover:text-primary"
          >
            <User className="size-5" />
          </button>
        </header>

        <main className="space-y-4 px-4 pt-3">
          {tab === "app" && (
            <h1 className="animate-rise text-[2rem] font-extrabold tracking-tight text-foreground">
              Good Afternoon!
            </h1>
          )}

          {tab === "app" ? (
            <>
              <div className="animate-fade-in grid place-items-center rounded-[26px] bg-accent/70 px-6 py-10">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold tracking-tight text-foreground/80">
                    Google <span className="text-muted-foreground">for Startups</span>
                  </span>
                  <span className="h-7 w-px bg-border" />
                  <span className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
                    <span className="grid size-7 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                        <path
                          d="M6 15a5 5 0 0 1 5-5h2a5 5 0 0 1 0 10h-2"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                        <circle cx="8" cy="7" r="2.6" fill="currentColor" />
                      </svg>
                    </span>
                    InterLink Labs
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <article className="relative overflow-hidden rounded-[26px] bg-accent/60 p-5 pb-24">
                  <p className="text-3xl font-bold text-foreground">20</p>
                  <p className="text-sm font-medium text-muted-foreground">$ITLG</p>
                  <img
                    src={coinsSilver}
                    alt="Silver $ITLG coins"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="pointer-events-none absolute -bottom-3 -right-2 w-40 animate-float-slow object-contain"
                  />
                </article>

                <article className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,oklch(0.96_0.02_300),oklch(0.9_0.07_282))] p-5 pb-24">
                  <p className="text-3xl font-bold text-foreground">0</p>
                  <p className="text-sm font-medium text-foreground/60">$ITLG Recoverable</p>
                  <img
                    src={coinGold}
                    alt="Gold recoverable $ITLG coin"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="pointer-events-none absolute -bottom-4 -right-3 w-36 animate-float object-contain"
                  />
                </article>
              </div>

              <article className="relative overflow-hidden rounded-[26px] bg-accent/60 p-6">
                <div className="max-w-[62%]">
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground">
                    Mine $ITLG to Secure the Human Network!
                  </h2>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,oklch(0.92_0.13_95),oklch(0.83_0.16_88))] px-7 py-4 text-lg font-bold text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
                    Mine $ITLG
                    <ArrowUpRight className="size-5" />
                  </button>
                </div>
                <img
                  src={globeNetwork}
                  alt="Global network of miners"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="pointer-events-none absolute -right-6 top-1/2 w-56 -translate-y-1/2 animate-float-slow object-contain"
                />
              </article>

              <article className="relative overflow-hidden rounded-[26px]">
                <img
                  src={verifiedGold}
                  alt="Verified $ITLG gold coin"
                  loading="lazy"
                  width={1536}
                  height={900}
                  className="h-56 w-full animate-ken-burns object-cover"
                />
                <span className="absolute left-6 top-6 text-2xl font-bold text-foreground/70">
                  Verified $ITLG
                </span>
                <span className="absolute right-6 top-6 grid size-12 place-items-center rounded-2xl bg-white/40 text-foreground backdrop-blur-md">
                  <Check className="size-6" />
                </span>
              </article>
            </>
          ) : (
            <ManageWallets />
          )}
        </main>

        {/* bottom nav */}
        <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[min(92%,480px)] items-center justify-around rounded-full bg-card px-4 py-3 shadow-float">
          {[
            { icon: Globe, label: "Explore" },
            { icon: Home, label: "Home", active: true },
            { icon: Store, label: "Marketplace" },
            { icon: UsersRound, label: "Community" },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              aria-label={label}
              className={`grid size-12 place-items-center rounded-full transition-colors ${
                active ? "bg-ink text-white" : "text-foreground/70 hover:text-primary"
              }`}
            >
              <Icon className="size-5" />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

function ManageWallets() {
  const [sheetOpen, setSheetOpen] = useState(true);

  return (
    <div className="animate-fade-in relative -mx-4 min-h-[560px] rounded-b-[26px] bg-[oklch(0.75_0.012_300)] px-5 pb-6 pt-4">
      <div className="flex items-center gap-3">
        <button
          aria-label="Back"
          className="grid size-11 place-items-center rounded-full bg-white/25 text-foreground transition-colors hover:bg-white/40"
        >
          <ChevronLeft className="size-5" />
        </button>
        <h2 className="flex-1 pr-11 text-center text-xl font-extrabold tracking-tight text-foreground">
          Manage Wallets
        </h2>
      </div>

      <button className="mt-8 flex w-full items-center justify-between text-left">
        <span className="text-2xl font-extrabold tracking-tight text-foreground">Wallet 1</span>
        <ChevronRight className="size-5 text-foreground/60" />
      </button>

      <div className="mt-5 flex items-center gap-4">
        <span className="size-12 rounded-full bg-[conic-gradient(at_30%_30%,oklch(0.7_0.16_150),oklch(0.55_0.2_285),oklch(0.7_0.14_250),oklch(0.6_0.18_300),oklch(0.7_0.16_150))]" />
        <span className="flex-1">
          <span className="block text-base font-bold text-foreground">Account #1</span>
          <span className="block text-sm font-medium text-foreground/55">$*.**</span>
        </span>
        <button aria-label="Account options" className="text-foreground/60 hover:text-foreground">
          <MoreVertical className="size-5" />
        </button>
      </div>

      <button
        onClick={() => setSheetOpen(true)}
        className="mt-6 flex w-full items-center gap-4 text-left"
      >
        <span className="grid size-12 place-items-center rounded-full bg-white/25 text-foreground/70">
          <Plus className="size-5" />
        </span>
        <span className="text-base font-semibold text-foreground/55">Add Account</span>
      </button>

      {sheetOpen && (
        <div className="absolute inset-x-0 bottom-0 animate-rise rounded-t-[26px] bg-card px-5 pb-8 pt-4 shadow-float">
          <span className="mx-auto block h-1.5 w-10 rounded-full bg-border" />
          <div className="mt-5 flex items-center justify-between">
            <h3 className="text-xl font-extrabold tracking-tight text-foreground">
              Add or Import Wallet
            </h3>
            <button
              aria-label="Close"
              onClick={() => setSheetOpen(false)}
              className="grid size-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-accent"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {["Create new wallet", "Import existing wallet"].map((label) => (
              <button
                key={label}
                className="flex w-full items-center gap-4 rounded-2xl bg-accent/60 px-4 py-4 text-left transition-colors hover:bg-accent"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-ink text-white">
                  <WalletIcon className="size-5" />
                </span>
                <span className="flex-1 text-base font-bold text-foreground">{label}</span>
                <LogIn className="size-5 text-foreground/60" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
