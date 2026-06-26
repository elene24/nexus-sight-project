import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/mission", label: "Mission" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { to: "/services", label: "Services" },
      { to: "/activities", label: "Activities" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An intelligence consultancy turning open sources, signals, and human expertise into
              decisions our partners can act on.
            </p>
            <div className="mt-8 flex items-center gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Mail, label: "Email", href: "mailto:hello@osintus.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="focus-ring text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <p className="eyebrow">Newsletter</p>
            <p className="mt-5 text-sm text-muted-foreground">
              Quarterly intelligence briefings. No noise.
            </p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="focus-ring h-10 w-full rounded-sm border border-border bg-surface px-3 text-sm placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                className="focus-ring h-10 shrink-0 rounded-sm border border-border-strong bg-surface-2 px-3 text-xs font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-surface-3"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="font-mono tracking-wider">
            © {new Date().getFullYear()} OSINTUS — All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" hash="privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/" hash="terms" className="hover:text-foreground">Terms</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
