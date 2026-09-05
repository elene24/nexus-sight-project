import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/mission", label: "Mission" },
  { to: "/team", label: "Team" },
  { to: "/activities", label: "Activities" },
  { to: "/insights", label: "Insights" },
  { to: "/services", label: "Services" },
  // Partners stays routable but is temporarily hidden from the menu.
  { to: "/partners", label: "Partners", hidden: true },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

const VISIBLE_NAV = NAV.filter((i) => !("hidden" in i && i.hidden));


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "GEO">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {VISIBLE_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="focus-ring relative rounded px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-sm border border-border px-1 py-0.5 text-[11px] font-mono text-muted-foreground md:flex">
            {(["EN", "GEO"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`focus-ring rounded-sm px-2 py-1 transition-colors ${
                  lang === l ? "bg-surface-3 text-foreground" : "hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-x grid gap-1 py-4" aria-label="Mobile">
            {VISIBLE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-3 py-3 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-surface-2" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-3 pt-3 border-t border-border">
              {(["EN", "GEO"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`focus-ring rounded-sm border border-border px-3 py-1.5 text-xs font-mono ${
                    lang === l ? "bg-surface-3 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
