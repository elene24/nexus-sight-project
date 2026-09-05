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

        <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground/90">{activity.preview}</p>
        </div>
      </div>
    </article>
  );
}
