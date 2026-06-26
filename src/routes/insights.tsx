import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { INSIGHTS } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — OSINTUS" },
      { name: "description", content: "Research, opinion, and method from OSINTUS analysts." },
      { property: "og:title", content: "Insights — OSINTUS" },
      { property: "og:description", content: "Field notes from the practice." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const allTags = useMemo(() => Array.from(new Set(INSIGHTS.flatMap((p) => p.tags))), []);
  const [active, setActive] = useState<string | null>(null);
  const items = active ? INSIGHTS.filter((p) => p.tags.includes(active)) : INSIGHTS;

  return (
    <>
      <PageHeader eyebrow="Insights" title="Field notes from the practice." description="Research, opinion, and method from analysts working live cases." />
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActive(null)}
              className={`focus-ring rounded-sm border px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                active === null ? "border-border-strong bg-surface-3 text-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`focus-ring rounded-sm border px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                  active === t ? "border-border-strong bg-surface-3 text-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {items.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.05 }}
                className="group bg-background p-8 transition-colors hover:bg-surface/60"
              >
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-sm border border-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t}</span>
                  ))}
                </div>
                <h2 className="mt-5 font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-paper">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>{p.author} · {p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
