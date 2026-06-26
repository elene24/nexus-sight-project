import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ACTIVITIES } from "@/lib/site-data";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — OSINTUS" },
      { name: "description", content: "Announcements, partnerships, and events from OSINTUS." },
      { property: "og:title", content: "Activities — OSINTUS" },
      { property: "og:description", content: "What we're doing and where we're showing up." },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  // Masonry-style varying spans
  const spans = ["md:row-span-2", "", "", "md:row-span-2"];
  return (
    <>
      <PageHeader eyebrow="Activities" title="What we're doing." description="Selected announcements, partnerships, and field activity." />
      <section className="py-24 md:py-28">
        <div className="container-x">
          <div className="grid auto-rows-[minmax(0,1fr)] gap-6 md:grid-cols-3">
            {ACTIVITIES.concat(ACTIVITIES).slice(0, 8).map((a, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                className={`group flex flex-col overflow-hidden rounded-sm border border-border bg-surface/40 transition-colors hover:bg-surface/70 ${spans[i % 4]}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <img src={a.cover} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
                  <span className="absolute left-4 top-4 rounded-sm border border-border-strong bg-background/70 px-2 py-1 text-[10px] font-mono uppercase tracking-widest backdrop-blur">{a.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{a.date}</p>
                  <h3 className="mt-3 font-display text-lg font-medium leading-snug text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.preview}</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground/80 hover:text-foreground">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
