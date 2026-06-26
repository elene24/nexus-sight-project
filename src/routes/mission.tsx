import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission — OSINTUS" },
      { name: "description", content: "Why OSINTUS exists: open source intelligence that informs decisions." },
      { property: "og:title", content: "Mission — OSINTUS" },
      { property: "og:description", content: "Why OSINTUS exists: open source intelligence that informs decisions." },
    ],
  }),
  component: MissionPage,
});

const VALUES = [
  { k: "Precision", v: "We assert nothing we cannot source. Every finding is verifiable, every assumption stated." },
  { k: "Discretion", v: "Operational confidentiality is a default, not a setting. Most of our work is never seen." },
  { k: "Independence", v: "No vendor ties, no conflicts of interest. Our findings are answerable only to fact." },
  { k: "Rigour", v: "Tradecraft, peer review, and adversarial testing of conclusions before they leave our desks." },
];

function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title={<>We turn open signals into decisions.</>}
        description="OSINTUS exists to give leaders an information edge in a world where signal and noise are increasingly indistinguishable."
      />
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 md:pr-8">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
                Intelligence is not data &mdash; it is the discipline of turning data into a decision someone can act on.
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>OSINTUS was founded by practitioners from government, corporate, and investigative backgrounds who shared one belief: the modern information environment rewards rigour and punishes guesswork.</p>
                <p>Our clients are leaders responsible for difficult decisions &mdash; mergers, security incidents, regulatory exposure, hostile actors, fragile geographies. They retain us when conventional sources have run out and the cost of being wrong is high.</p>
                <p>We are deliberately small, senior, and quiet. We do not publish client names, we do not chase headlines, and we do not take work we cannot do well.</p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-28 space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {VALUES.map((it) => (
                <div key={it.k} className="bg-background p-7">
                  <p className="font-display text-sm tracking-wider text-foreground">{it.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
