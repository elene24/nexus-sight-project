import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-network.jpg";

const EDGES: [number, number, number, number][] = [
  [100, 80, 260, 140], [260, 140, 420, 90], [420, 90, 580, 170],
  [580, 170, 700, 110], [260, 140, 340, 260], [340, 260, 500, 300],
  [500, 300, 640, 240], [100, 80, 180, 220], [180, 220, 340, 260],
];

const NODES: [number, number][] = [
  [100, 80], [260, 140], [420, 90], [580, 170], [700, 110],
  [340, 260], [500, 300], [640, 240], [180, 220],
];

export function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* Decorative animated SVG network — hover reacts on the lines/nodes themselves */}
      <svg
        aria-hidden
        viewBox="0 0 800 400"
        className={`pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-[520px] w-full max-w-6xl transition-opacity duration-500 ${
          active ? "opacity-70" : "opacity-30"
        }`}
      >
        <defs>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#77979E" stopOpacity="1" />
            <stop offset="100%" stopColor="#77979E" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g
          style={{ pointerEvents: "auto" }}
          onPointerEnter={() => setActive(true)}
          onPointerLeave={() => setActive(false)}
        >
          {EDGES.map(([x1, y1, x2, y2], i) => (
            <g key={`e${i}`}>
              {/* invisible hit area so thin lines are easy to hover */}
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="transparent" strokeWidth="16" />
              <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={active ? "#EBEFF2" : "#77979E"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.7,
                  strokeWidth: active ? 1.4 : 0.6,
                }}
                transition={{
                  pathLength: { duration: 2.4, delay: 0.15 * i, ease: "easeOut" },
                  opacity: { duration: 2.4, delay: 0.15 * i },
                  strokeWidth: { duration: 0.4, delay: active ? 0.04 * i : 0 },
                }}
                style={{ pointerEvents: "none" }}
              />
            </g>
          ))}

          {NODES.map(([cx, cy], i) => (
            <g key={`n${i}`}>
              <circle cx={cx} cy={cy} r="18" fill="transparent" />
              <motion.circle
                cx={cx} cy={cy} r="14" fill="url(#node)"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: active ? 0.95 : 0.6, scale: active ? 1.45 : 1 }}
                transition={{
                  opacity: { duration: active ? 0.5 : 1.2, delay: active ? 0.04 * i : 0.2 * i + 0.6 },
                  scale: { duration: 0.5, delay: active ? 0.04 * i : 0 },
                }}
                style={{ originX: `${cx}px`, originY: `${cy}px`, pointerEvents: "none" }}
              />
              <motion.circle
                cx={cx} cy={cy} fill="#EBEFF2"
                initial={{ opacity: 0, r: 2 }}
                animate={{ opacity: 1, r: active ? 3.4 : 2 }}
                transition={{
                  opacity: { duration: 0.4, delay: active ? 0 : 0.2 * i + 0.6 },
                  r: { duration: 0.4, delay: active ? 0.04 * i : 0 },
                }}
                style={{ pointerEvents: "none" }}
              />
            </g>
          ))}
        </g>
      </svg>


      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-border-strong" />
          <p className="eyebrow">OSINT Training · Consulting · Visio in tenebris</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-[2.4rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[5rem]"
        >
          Open-Source Intelligence professionals{" "}
          <span className="text-mute">from Georgia.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          OSINTUS delivers OSINT training and consulting for diplomatic missions,
          institutions, media, academia, and civil society — building digital
          resilience, advancing OSINT practice, and countering disinformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/services"
            className="focus-ring group inline-flex items-center gap-2 rounded-sm border border-border-strong bg-paper px-5 py-3 text-sm font-medium text-navy transition-all hover:bg-foreground"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="focus-ring group inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-surface-2"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4"
        >
          {[
            ["20+", "Years of expertise"],
            ["NATO & CEPOL", "Certified accreditations"],
            ["10+", "Embassies & partners"],
            ["EaP 2026", "Civic Tech Award"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background/80 px-5 py-6 backdrop-blur">
              <p className="font-display text-2xl font-medium text-foreground md:text-3xl">{k}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
