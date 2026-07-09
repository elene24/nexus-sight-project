import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { SectionHeader, Reveal } from "@/components/site/Section";
import { PatternBg } from "@/components/site/Pattern";
import { ACTIVITIES, INSIGHTS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OSINTUS — Intelligence, Investigations, Security" },
      { name: "description", content: "An intelligence consultancy turning open sources, investigations, and cyber expertise into decisions our partners can act on." },
      { property: "og:title", content: "OSINTUS — Intelligence, Investigations, Security" },
      { property: "og:description", content: "Open source intelligence, investigations, due diligence, and cyber expertise." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* Mission */}
      <section id="mission" className="relative py-24 md:py-32">
        <PatternBg opacity={0.04} />
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Working Together</p>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-5xl">
              End-to-end intelligence, delivered with care.
            </h2>
          </div>
          <div className="relative md:col-span-7 md:pl-10">
            <span aria-hidden className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mute/60 via-mute/20 to-transparent md:block" />
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90">
                We provide an end-to-end client experience — seamless communication,
                tailored research, skilled analysis, practical training, and
                actionable intelligence.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our team is composed of certified professionals accredited by
                organisations including NATO and the European Union Agency for Law
                Enforcement Training (CEPOL), with up to 20 years of hands-on
                experience in security and intelligence. We currently operate
                locally in Georgia and are expanding onto the international stage —
                partnering with embassies, NGOs, media, universities, and schools
                to promote digital awareness and combat disinformation.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  ["Why Choose Us", "Senior practitioners, accredited by NATO and CEPOL."],
                  ["Trusted Partners", "Embassies, NGOs, universities, and independent media."],
                  ["Visio in tenebris", "Clarity where the information environment is hardest."],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-border pt-4">
                    <p className="font-display text-sm tracking-wider text-foreground">{k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 md:py-32">
        <PatternBg opacity={0.035} />
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Services"
              title={<>Capabilities built for the<br className="hidden md:inline" /> hardest questions.</>}
            />
            <Link
              to="/services"
              className="hidden shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader eyebrow="Activities" title="What we&rsquo;re doing." />
            <Link to="/activities" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              All activities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group flex flex-col bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <img src={a.cover} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-sm border border-border-strong bg-background/70 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-foreground backdrop-blur">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{a.date}</p>
                  <h3 className="mt-3 font-display text-base font-medium leading-snug text-foreground">{a.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{a.preview}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground/80 transition-colors hover:text-foreground">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights teaser */}
      <section id="insights" className="relative border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Insights"
            title="Field notes from the practice."
            description="Research, opinion, and method from analysts working live cases."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to="/insights" className="group flex h-full flex-col justify-between rounded-sm border border-border bg-background p-7 transition-all hover:border-border-strong hover:bg-surface/70">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mute">Medium · OSINTUS</p>
                    <h3 className="mt-5 font-display text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-paper">{p.title}</h3>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span>Read</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <PatternBg opacity={0.05} />
        <div className="container-x">
          <div className="relative overflow-hidden rounded-sm border border-border bg-surface px-8 py-16 md:px-16 md:py-24">
            <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-60" />
            <div className="grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="eyebrow">Engage</p>
                <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-5xl">
                  Have a question you can&rsquo;t afford to get wrong?
                </h2>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-paper px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-foreground"
                >
                  Start a conversation <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
