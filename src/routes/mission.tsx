import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission — OSINTUS" },
      { name: "description", content: "OSINTUS advances the professional use of open source information: training, investigations and advisory work grounded in verifiable evidence." },
      { property: "og:title", content: "Mission — OSINTUS" },
      { property: "og:description", content: "Advancing the professional use of open source information." },
    ],
  }),
  component: MissionPage,
});

const MISSION_TEXT = [
  "OSINTUS advances the professional use of open source information. We raise awareness of its value, promote the security practices that make its use responsible, and advocate for decisions grounded in analysis rather than assumption.",
  "Our partners are institutions, organisations and companies operating in complex environments, where the cost of acting on unreliable or irrelevant information is measured in exposure, reputation and missed judgement. Through training, investigations and advisory work, we establish what is publicly available, determine what can be verified, and set out what it means in their context.",
  "We work across the full analytical cycle, from collection to conclusion. We conduct the research, apply the methods and deliver the findings, and we build the capability that sits behind them, so that our partners are equipped to reach conclusions they can defend on their own terms. Capability rather than dependency, grounded in traceable sources, transparent reasoning and strict legal and ethical standards. Digital security is treated in the same way, as an operational discipline rather than a written policy, because information gathered responsibly must also be protected.",
  "We remain independent and non partisan. Our commitment is to evidence, not to agendas.",
];

function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title="Mission"
        description="Advancing the professional use of open source information."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <Reveal>
              <div className="space-y-6">
                {MISSION_TEXT.map((p) => (
                  <p key={p.slice(0, 24)} className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-12 border-l border-border-strong pl-6">
                <p className="font-display text-lg font-medium leading-snug text-foreground md:text-xl">
                  Visio in Tenebris - vision in darkness.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Recognising where information is absent, defining what must be
                  known, and producing clarity where the picture is incomplete,
                  contested or deliberately obscured.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
