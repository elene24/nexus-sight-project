import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Section";
import { OPENINGS } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — OSINTUS" },
      { name: "description", content: "Join a senior team of intelligence, investigations, and cyber practitioners." },
      { property: "og:title", content: "Careers — OSINTUS" },
      { property: "og:description", content: "Join a senior team of intelligence and investigations practitioners." },
    ],
  }),
  component: CareersPage,
});

const GALLERY = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=70",
];

function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work that matters, with people who&rsquo;ve done it before."
        description="We hire experienced practitioners and exceptional juniors who want to be trained properly. We don't hire to fill seats."
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Culture</p>
            <h2 className="mt-5 font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              Senior, small, and quiet by design.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Flat structure, deep mentoring, real autonomy. We protect time for
              learning and reading. We say no to work that doesn&rsquo;t fit.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.04]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-20 md:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Current openings</p>
              <h2 className="mt-3 font-display text-2xl font-medium text-foreground md:text-3xl">Open roles</h2>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{OPENINGS.length} positions</p>
          </div>

          <div className="mt-10 divide-y divide-border overflow-hidden rounded-sm border border-border bg-background">
            {OPENINGS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.04}>
                <a
                  href="#apply"
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 p-6 transition-colors hover:bg-surface-2 sm:flex sm:flex-wrap sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-medium text-foreground">{o.title}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{o.location} · {o.type}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border px-3 py-2 text-xs font-mono uppercase tracking-widest text-foreground/80 transition-colors group-hover:border-border-strong group-hover:text-foreground">
                    Apply <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div id="apply" className="mt-16 rounded-sm border border-border bg-background p-8 text-center">
            <p className="eyebrow">General application</p>
            <h3 className="mt-3 font-display text-xl text-foreground">Don&rsquo;t see your role?</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              We always want to hear from exceptional analysts, investigators, and operators.
            </p>
            <a href="mailto:careers@osintus.com" className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border-strong bg-paper px-5 py-3 text-sm font-medium text-navy hover:bg-foreground">
              careers@osintus.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
