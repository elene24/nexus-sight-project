import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — OSINTUS" },
      { name: "description", content: "Senior intelligence, investigations, and cyber practitioners." },
      { property: "og:title", content: "Team — OSINTUS" },
      { property: "og:description", content: "Senior intelligence, investigations, and cyber practitioners." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Practitioners, not consultants."
        description="Our team is built around operators with first-hand experience in intelligence services, investigations, and cyber defence."
      />
      <section className="py-24 md:py-28">
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="group relative bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <a href="#" aria-label={`${m.name} on LinkedIn`} className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border-strong bg-background/80 text-foreground backdrop-blur hover:bg-surface-3">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={`mailto:hello@osintus.com`} aria-label={`Email ${m.name}`} className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border-strong bg-background/80 text-foreground backdrop-blur hover:bg-surface-3">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-display text-base font-medium text-foreground">{m.name}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-mute">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
