import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Pin } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { SectionHeader, Reveal } from "@/components/site/Section";
import { PatternBg } from "@/components/site/Pattern";
import { ACTIVITIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OSINTUS — Open Source Intelligence, Training & Advisory" },
      { name: "description", content: "OSINTUS advances the professional use of open source information: training, investigations, and advisory work grounded in traceable sources and transparent reasoning." },
      { property: "og:title", content: "OSINTUS — Open Source Intelligence, Training & Advisory" },
      { property: "og:description", content: "OSINT research, analysis, training and advisory support for institutions operating in complex environments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const highlights = ACTIVITIES.filter((a) => a.pinned).slice(0, 2);
const recent = ACTIVITIES.filter((a) => !a.pinned).slice(0, 4);

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />

      {/* Activities */}
      <section id="activities" className="relative py-24 md:py-32">
        <PatternBg opacity={0.035} />
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader eyebrow="Activities" title="What we&rsquo;re doing." />
            <Link to="/activities" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              All activities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {highlights.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {highlights.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                  <article className="group flex h-full gap-5 rounded-sm border border-border-strong bg-surface/50 p-5 transition-colors hover:bg-surface/80">
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-sm border border-border">
                      <img src={a.cover} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-mute">
                        <Pin className="h-3 w-3" /> Highlight · {a.date}
                      </p>
                      <h3 className="mt-2 font-display text-base font-medium leading-snug text-foreground">{a.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{a.preview}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-sm border border-border bg-background">
            {recent.map((a, i) => (
              <motion.li
                key={a.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group"
              >
                <a href="#" className="focus-ring flex items-start gap-5 p-5 transition-colors hover:bg-surface/60 sm:gap-6 sm:p-6">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-border sm:h-24 sm:w-36">
                    <img src={a.cover} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {a.category} · {a.date}
                    </p>
                    <h3 className="mt-2 font-display text-[15px] font-medium leading-snug text-foreground">{a.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{a.preview}</p>
                  </div>
                  <ArrowUpRight className="mt-1 hidden h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working Together */}
      <section id="working-together" className="relative border-t border-border bg-surface/20 py-24 md:py-32">
        <PatternBg opacity={0.04} />
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Working Together</p>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-5xl">
              End to end capability, delivered with care.
            </h2>
          </div>
          <div className="relative md:col-span-7 md:pl-10">
            <span aria-hidden className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mute/60 via-mute/20 to-transparent md:block" />
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90">
                OSINT training and consulting from Georgia — advancing OSINT
                practice, building digital resilience, and enabling
                analysis-based decision-making.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="border-t border-border pt-4">
                  <p className="font-display text-sm tracking-wider text-foreground">What We Deliver</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We provide a complete client experience, from the first briefing
                    to the final product. Tailored research, rigorous analysis,
                    practical training and findings our partners can act on,
                    supported throughout by clear and direct communication.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-sm tracking-wider text-foreground">Expertise</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Our team holds certifications from NATO and the European Union
                    Agency for Law Enforcement Training (CEPOL), and brings decades
                    of combined experience across national and global security,
                    intelligence and analytical training. That experience is applied
                    directly to the work: methods that hold up under scrutiny,
                    findings that stand on their sourcing, and training built by
                    practitioners for practitioners.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-sm tracking-wider text-foreground">Trust</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We work with embassies, international organisations,
                    non-governmental organisations, universities and media,
                    delivering training and analytical support to institutions that
                    require verified work and discretion in equal measure.
                    Established in Georgia, we now operate increasingly across the
                    region and internationally.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
