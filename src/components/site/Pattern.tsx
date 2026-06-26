import patternBg from "@/assets/bg-pattern.jpg";

/** Extremely subtle topographic / network pattern overlay. */
export function PatternBg({ opacity = 0.05, className = "" }: { opacity?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity,
      }}
    />
  );
}

export function GridBg({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] ${className}`} />;
}
