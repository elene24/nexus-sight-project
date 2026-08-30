import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Products — OSINTUS" },
      { name: "description", content: "OSINTUS products: hands-on OSINT training programmes, analytical reports on geopolitics and security, and consulting on building open source capability." },
      { property: "og:title", content: "Products — OSINTUS" },
      { property: "og:description", content: "Training, Reports and Consulting built on open sources and structured analytical methods." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Training, Reports, Consulting."
        description="Delivered by practitioners: methodology combined with applied casework, adapted to each client's operating context."
      />
      <section className="py-24 md:py-28">
        <div className="container-x">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}

