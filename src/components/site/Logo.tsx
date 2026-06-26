import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="OSINTUS home" className={`group inline-flex items-center gap-2.5 focus-ring ${className}`}>
      <span className="relative inline-flex h-7 w-7 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 32 32" className="h-7 w-7 text-foreground">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
          <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.8" />
          <circle cx="16" cy="16" r="2.2" fill="currentColor" />
          <path d="M2 16h6M24 16h6M16 2v6M16 24v6" stroke="currentColor" strokeWidth="1.25" opacity="0.7" />
          <path d="M6.5 6.5l3 3M22.5 22.5l3 3M25.5 6.5l-3 3M9.5 22.5l-3 3" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        </svg>
      </span>
      <span className="font-display text-[15px] font-semibold tracking-[0.28em] text-foreground">
        OSINTUS
      </span>
    </Link>
  );
}
