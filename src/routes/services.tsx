import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — OSINTUS" },
      { name: "description", content: "OSINT, investigations, due diligence, threat intelligence, corporate intelligence, cyber, training, and consulting." },
      { property: "og:title", content: "Services — OSINTUS" },
      { property: "og:description", content: "Intelligence and investigative capabilities, built for the hardest questions." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Capabilities built for the hardest questions."
        description="Eight practice areas, delivered by senior analysts and investigators with first-hand operational experience."
      />
      <section className="py-24 md:py-28">
        <div className="container-x">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}
