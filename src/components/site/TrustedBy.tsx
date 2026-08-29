import { TRUSTED_BY } from "@/lib/site-data";

const LOGOS = TRUSTED_BY;

export function TrustedBy() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-14">
      <div className="container-x">
        <p className="eyebrow text-center">Trusted by</p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[scroll_42s_linear_infinite] gap-14">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div
                key={i}
                className="group flex shrink-0 items-center gap-2 px-2 py-2 font-display text-[13px] tracking-[0.18em] text-muted-foreground/70 grayscale transition-all duration-500 hover:scale-105 hover:text-foreground hover:grayscale-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mute/60 transition-colors group-hover:bg-foreground" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
