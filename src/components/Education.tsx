import { useEffect, useRef } from "react";

const education = [
  {
    icon: "🎓",
    degree: "B.Tech — Computer Science",
    specialisation: "AI & Data Science",
    institution: "SISTec Gandhi Nagar, Bhopal",
    period: "2023 – Present",
    note: "Active",
  },
  {
    icon: "📚",
    degree: "Higher Secondary",
    specialisation: "Physics · Chemistry · Mathematics",
    institution: "Maharaja Aggarsain Adarsh Public School, Delhi",
    period: "2024",
    note: null,
  },
  {
    icon: "🏫",
    degree: "Secondary School",
    specialisation: "Core Sciences",
    institution: "Maharaja Aggarsain Adarsh Public School, Delhi",
    period: "2022",
    note: null,
  },
];

export function Education() {
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
      id="education"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        <p className="reveal section-eyebrow">Education</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-12"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Academic{" "}
          <span className="text-gradient">Foundation</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <div
              key={e.degree}
              className="reveal rounded-2xl p-6 relative overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(0,212,170,0.12)",
                animationDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(ev) => {
                const el = ev.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,212,170,0.35)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(0,212,170,0.07)";
              }}
              onMouseLeave={(ev) => {
                const el = ev.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,212,170,0.12)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(180deg, #00D4AA, #7C6FE0)" }}
              />

              <div className="flex items-start justify-between mb-4 pl-3">
                <span className="text-2xl">{e.icon}</span>
                {e.note && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(0,212,170,0.12)",
                      color: "#00D4AA",
                      border: "1px solid rgba(0,212,170,0.25)",
                    }}
                  >
                    {e.note}
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-base pl-3" style={{ color: "var(--foreground)" }}>
                {e.degree}
              </h3>
              <p className="text-xs font-medium mt-0.5 pl-3" style={{ color: "#00D4AA" }}>
                {e.specialisation}
              </p>
              <p className="text-sm mt-2 pl-3" style={{ color: "var(--muted-foreground)" }}>
                {e.institution}
              </p>

              <div
                className="mt-5 pt-3 pl-3 flex items-center"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {e.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
