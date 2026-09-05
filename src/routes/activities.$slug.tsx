import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { ACTIVITIES } from "@/lib/site-data";

export const Route = createFileRoute("/activities/$slug")({
  loader: ({ params }) => {
    const activity = ACTIVITIES.find((a) => a.slug === params.slug);
    if (!activity) throw notFound();
    return { activity };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Activity not found — OSINTUS" }, { name: "robots", content: "noindex" }] };
    }
    const { activity } = loaderData;
    return {
      meta: [
        { title: `${activity.title} — OSINTUS` },
        { name: "description", content: activity.preview.slice(0, 155) },
        { property: "og:title", content: `${activity.title} — OSINTUS` },
        { property: "og:description", content: activity.preview.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: activity.cover },
        { name: "twitter:image", content: activity.cover },
      ],
    };
  },
  component: ActivityDetail,
});

function ActivityDetail() {
  const { activity } = Route.useLoaderData();
  const others = ACTIVITIES.filter((a) => a.slug !== activity.slug).slice(0, 3);

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="container-x">
        <Link
          to="/activities"
          className="focus-ring inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All activities
        </Link>

        <p className="eyebrow mt-10">{activity.category} · {activity.date}</p>
        <h1 className="mt-5 max-w-4xl font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">
          {activity.title}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-sm border border-border-strong"
        >
          <img src={activity.cover} alt={activity.title} className="aspect-[16/9] w-full object-cover" />
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-foreground/90">{activity.preview}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              {(activity.body ?? []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="rounded-sm border border-border bg-surface/40 p-6">
              <p className="eyebrow">Event details</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">Date</dt>
                  <dd className="mt-1 text-foreground">{activity.date}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">Category</dt>
                  <dd className="mt-1 text-foreground">{activity.category}</dd>
                </div>
                {activity.location && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">Location</dt>
                    <dd className="mt-1 text-foreground">{activity.location}</dd>
                  </div>
                )}
                {activity.audience && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">Participants</dt>
                    <dd className="mt-1 text-foreground">{activity.audience}</dd>
                  </div>
                )}
              </dl>
              <Link
                to="/contact"
                className="focus-ring mt-6 inline-flex items-center gap-2 border-b border-foreground/40 pb-0.5 font-mono text-[11px] uppercase tracking-widest text-foreground hover:border-foreground"
              >
                Request a session
              </Link>
            </div>
          </aside>
        </div>

        {others.length > 0 && (
          <div className="mt-20 border-t border-border pt-10">
            <p className="eyebrow">More activities</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  to="/activities/$slug"
                  params={{ slug: a.slug }}
                  className="group rounded-sm border border-border bg-surface/40 p-5 transition-colors hover:bg-surface/70"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mute">{a.category} · {a.date}</p>
                  <h3 className="mt-2 font-display text-[15px] font-medium leading-snug text-foreground">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

