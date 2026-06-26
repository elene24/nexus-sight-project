import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { PARTNERS } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Supporters — OSINTUS" },
      { name: "description", content: "Organisations OSINTUS works with across intelligence, research, and security." },
      { property: "og:title", content: "Partners & Supporters — OSINTUS" },
      { property: "og:description", content: "Our partners and supporters." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners & Supporters"
        title="Organisations we work with."
        description="A selection of partners across intelligence, academic research, security, and policy."
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {PARTNERS.map((name, i) => (
              <motion.a
                key={name}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 8) * 0.04 }}
                className="group flex aspect-[3/2] items-center justify-center bg-background p-6 transition-colors hover:bg-surface/60"
              >
                <span className="font-display text-sm tracking-[0.28em] text-muted-foreground transition-all duration-500 group-hover:scale-105 group-hover:text-foreground">
                  {name.toUpperCase()}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
