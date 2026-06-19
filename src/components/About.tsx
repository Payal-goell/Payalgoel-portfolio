import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "🚀",
    label: "Focus Areas",
    value: "AI · Web · Mobile",
  },
  {
    icon: "🌐",
    label: "Community Role",
    value: "GDG & IEEE Leader",
  },
  {
    icon: "📦",
    label: "Shipped Projects",
    value: "Web, Android & Data",
  },
  {
    icon: "🤝",
    label: "Open Source",
    value: "GSSoC Contributor",
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <p className="reveal section-eyebrow">About</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-12"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Engineering with <span className="text-gradient">purpose.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — highlights */}
          <div
            className="reveal glass rounded-2xl p-8"
            style={{ animationDelay: "100ms", borderColor: "rgba(0,212,170,0.2)" }}
          >
            <p
              className="font-display font-semibold text-xs mb-6 uppercase tracking-widest"
              style={{ color: "#00D4AA" }}
            >
              Quick Profile
            </p>
            <div className="flex flex-col gap-3">
              {highlights.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(0,212,170,0.08)",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="font-display font-semibold text-base mt-0.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      {s.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — professional bio */}
          <div
            className="reveal space-y-5 leading-relaxed text-base"
            style={{ color: "var(--muted-foreground)", animationDelay: "200ms" }}
          >
            <p>
              I'm <span style={{ color: "var(--foreground)", fontWeight: 600 }}>Payal Goel</span> —
              a software developer specialising in AI-driven applications, data engineering, and
              full-stack web development. I work across the entire product lifecycle, from designing
              architecture to shipping production-ready features.
            </p>
            <p>
              As{" "}
              <span style={{ color: "#00D4AA", fontWeight: 500 }}>
                Web Dev Co-Lead at GDG on Campus
              </span>{" "}
              and <span style={{ color: "#7C6FE0", fontWeight: 500 }}>Webmaster at IEEE</span>, I
              oversee technical strategy, mentor engineers, and own the end-to-end delivery of
              community platforms — from planning through deployment.
            </p>
            <p>
              My work spans Python data pipelines, Android applications, and interactive web
              interfaces. I approach every problem with an engineering mindset: understand the
              requirements, prototype fast, and iterate toward something that's actually useful —
              not just technically correct.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Python",
                "Data Engineering",
                "Android / Flutter",
                "Web Development",
                "AI & ML",
                "Open Source",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(0,212,170,0.07)",
                    border: "1px solid rgba(0,212,170,0.22)",
                    color: "#00D4AA",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
