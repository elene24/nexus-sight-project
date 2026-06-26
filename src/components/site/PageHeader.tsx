import { PatternBg } from "./Pattern";
import { Reveal } from "./Section";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border pt-32 pb-16 md:pt-44 md:pb-24">
      <PatternBg opacity={0.05} />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
