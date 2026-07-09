import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "About Us — OSINTUS" },
      { name: "description", content: "OSINTUS core objectives and training objectives: supporting democracy, digital awareness, countering disinformation, and building OSINT expertise." },
      { property: "og:title", content: "About Us — OSINTUS" },
      { property: "og:description", content: "Team's Core Objectives and Training Objectives." },
    ],
  }),
  component: MissionPage,
});

const CORE = [
  {
    k: "Supporting Democracy and Human Rights",
    v: "We aim to foster the development of democratic institutions and uphold the protection of fundamental human rights.",
  },
  {
    k: "Enhancing Civil Digital Awareness",
    v: "We strive to raise public understanding of the digital domain, empowering communities with the knowledge to navigate the digital landscape responsibly.",
  },
  {
    k: "Combating Disinformation",
    v: "Through partnerships with civil society and independent media, we work to counteract disinformation and promote truth in public discourse.",
  },
  {
    k: "Enhancing Business Excellence through Analytics-Driven Consulting",
    v: "We offer tailored advisory and services focused on OSINT methodologies, delivering in-depth research, market analysis, and actionable insights. Our mission is to empower organisations to make informed, strategic decisions that drive sustainable growth and competitive advantage.",
  },
];

const TRAINING = [
  {
    k: "Understanding OSINT Fundamentals",
    v: "Gain clarity on the essence of Open Source Intelligence (OSINT), including what it is and what it is not.",
  },
  {
    k: "Exploring the Potential of Publicly Available Information",
    v: "Understand the vast scope and limitations of OSINT capabilities in gathering and analysing data.",
  },
  {
    k: "Building Research and Investigation Skills",
    v: "Learn key methods for structuring and executing effective research and investigative processes.",
  },
  {
    k: "Mastering Advanced OSINT Techniques",
    v: "Delve into advanced tools and strategies for information verification, collection, sorting, and in-depth analysis.",
  },
  {
    k: "Developing Independent Expertise",
    v: "Acquire the ability to refine your skills autonomously and stay updated on the latest developments in OSINT practices and technologies.",
  },
];

function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>Team&rsquo;s Core Objectives.</>}
        description="Our purpose, articulated. What we work toward, and what we train others to do."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Core Objectives</p>
            <h2 className="mt-5 font-display text-2xl font-medium leading-[1.1] text-foreground md:text-3xl">
              What we work toward.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {CORE.map((it, i) => (
                <Reveal key={it.k} delay={i * 0.05}>
                  <div className="h-full bg-background p-7">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mute">0{i + 1}</p>
                    <p className="mt-3 font-display text-base font-medium tracking-wide text-foreground">{it.k}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-20 md:py-28">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Training Objectives</p>
            <h2 className="mt-5 font-display text-2xl font-medium leading-[1.1] text-foreground md:text-3xl">
              What our programmes deliver.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our training programmes are designed to equip participants with
              essential skills and insights, with the following purposes.
            </p>
          </div>
          <div className="md:col-span-8">
            <ol className="divide-y divide-border rounded-sm border border-border bg-background">
              {TRAINING.map((it, i) => (
                <li key={it.k} className="flex gap-6 p-7">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-mute w-8 shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-base font-medium tracking-wide text-foreground">{it.k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.v}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
              In today&rsquo;s information-driven landscape, especially in the era
              of massive disinformation and fake news, as never before, it is
              time to step into the world of OSINT&hellip;
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
