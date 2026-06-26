import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/site-data";

export function ServicesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-background"
          >
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="focus-ring relative flex h-full flex-col gap-6 p-7 transition-colors hover:bg-surface/70"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface-2 text-foreground transition-colors group-hover:border-border-strong">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium leading-snug text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-mute/40 group-hover:shadow-[0_0_0_1px_rgba(119,151,158,0.25),0_30px_60px_-30px_rgba(119,151,158,0.35)]"
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
