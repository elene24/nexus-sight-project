import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — OSINTUS` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} — OSINTUS` },
          { property: "og:description", content: loaderData.service.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-dvh pt-40 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="mt-4 font-display text-3xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground">← Back to services</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="pt-40 text-center text-muted-foreground">{error.message}</div>,
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.short}
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-border bg-surface-2">
              <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
            </span>
            <p className="mt-8 text-lg leading-relaxed text-foreground/90">{service.description}</p>
            {service.modules && (
              <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {service.modules.map((m) => (
                  <div key={m.title} className="h-full bg-background p-6">
                    <p className="font-display text-sm font-medium tracking-wide text-foreground">{m.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-12 grid gap-3">
              {[
                "Scoped engagement led by a senior practitioner",
                "Auditable methodology and source documentation",
                "Findings tied to your specific decision point",
                "Confidential delivery, secure handling, signed reports",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-sm border border-border bg-surface/40 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mute" />
                  <p className="text-sm text-foreground/90">{b}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-12 inline-flex items-center gap-2 rounded-sm border border-border-strong bg-paper px-5 py-3 text-sm font-medium text-navy hover:bg-foreground">
              Discuss this capability
            </Link>
          </div>
          <aside className="md:col-span-4">
            <p className="eyebrow">Related</p>
            <div className="mt-5 space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {others.map((o) => (
                <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="block bg-background p-4 transition-colors hover:bg-surface-2">
                  <p className="font-display text-sm text-foreground">{o.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{o.short}</p>
                </Link>
              ))}
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
