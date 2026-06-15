import { useEffect, useRef } from "react";

const roles = [
  {
    icon: "🌐",
    role: "Web Dev Co-Lead",
    org: "Google Developer Group (GDG) on Campus",
    tenure: "2024 – Present",
    bullets: [
      "Own web strategy and technical direction for the campus developer community",
      "Lead a team of developers shipping community platforms and event tooling",
      "Run workshops on modern web technologies — React, TypeScript, performance",
      "Mentor junior engineers through code reviews and 1:1 technical guidance",
    ],
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.05)",
    accentBorder: "rgba(0,212,170,0.2)",
  },
  {
    icon: "📡",
    role: "Webmaster",
    org: "IEEE Student Branch",
    tenure: "2024 – Present",
    bullets: [
      "Architect and maintain the IEEE chapter's digital presence end-to-end",
      "Coordinate with event teams to publish content and manage technical comms",
      "Optimise site performance, accessibility, and mobile responsiveness",
      "Sole technical owner — from deployment pipeline to UX decisions",
    ],
    accent: "#7C6FE0",
    accentBg: "rgba(124,111,224,0.05)",
    accentBorder: "rgba(124,111,224,0.2)",
  },
];

export function Activities() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leadership"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        <p className="reveal section-eyebrow">Leadership</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-12"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Engineering{" "}
          <span className="text-gradient">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <div
              key={r.role}
              className="reveal rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: r.accentBg,
                border: `1px solid ${r.accentBorder}`,
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="text-2xl w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${r.accentBorder}` }}
                >
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-lg" style={{ color: "var(--foreground)" }}>
                      {r.role}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: `${r.accent}18`,
                        color: r.accent,
                        border: `1px solid ${r.accentBorder}`,
                      }}
                    >
                      {r.tenure}
                    </span>
                  </div>
                  <p className="text-sm font-medium mt-0.5" style={{ color: r.accent }}>
                    {r.org}
                  </p>
                </div>
              </div>

              {/* Bullet responsibilities */}
              <ul className="space-y-2">
                {r.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: r.accent, opacity: 0.7 }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Accent base line */}
              <div
                className="h-px rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${r.accent}55, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
