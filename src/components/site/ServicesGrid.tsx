import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/site-data";

export function ServicesGrid() {
  return (
    <div className="space-y-6">
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.section
            key={s.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-sm border border-border bg-surface/40 p-7 transition-colors hover:bg-surface/60 md:p-10"
          >
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface-2 text-foreground">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
                  {s.title}
                </h2>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="focus-ring mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  Details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-foreground/90">{s.description}</p>
                {s.modules && (
                  <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                    {s.modules.map((m) => (
                      <div key={m.title} className="h-full bg-background p-6">
                        <p className="font-display text-sm font-medium tracking-wide text-foreground">{m.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
