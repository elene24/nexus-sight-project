import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { INSIGHTS } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — OSINTUS" },
      { name: "description", content: "OSINTUS writing on Medium: OSINT fundamentals, tradecraft, and resources." },
      { property: "og:title", content: "Insights — OSINTUS" },
      { property: "og:description", content: "OSINTUS on Medium." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="OSINTUS on Medium."
        description="A working reading list from our practice — foundations, tradecraft, and resources."
      />
      <section className="py-16 md:py-24">
        <div className="container-x">
          <ul className="divide-y divide-border rounded-sm border border-border">
            {INSIGHTS.map((p, i) => {
              const Item = (
                <>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-mute w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base md:text-lg text-foreground group-hover:text-paper transition-colors">
                    {p.title}
                  </span>
                  {p.url ? (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
                      Link soon
                    </span>
                  )}
                </>
              );

              return (
                <motion.li
                  key={p.slug}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                >
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 px-6 py-5 md:px-8 md:py-6 hover:bg-surface/60 transition-colors"
                    >
                      {Item}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-5 px-6 py-5 md:px-8 md:py-6">
                      {Item}
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
