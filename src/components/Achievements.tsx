import { useEffect, useRef } from "react";

// Two categories: Recognition (competitive wins) and Certifications (industry credentials)
const recognitions = [
  {
    icon: "🥈",
    title: "2nd Place — Paper Presentation",
    detail: "National Science Day · Inter-college technical paper competition",
  },
  {
    icon: "🥉",
    title: "3rd Place — IoT Meets Gen AI on Cloud",
    detail: "Workshop-level competitive event on applied cloud and AI architectures",
  },
  {
    icon: "⭐",
    title: "Selected — SUPER-50 Programme",
    detail: "Competitive cohort selection recognising technical and academic excellence",
  },
  {
    icon: "🏅",
    title: "Agentblazer Champion",
    detail: "Salesforce · Recognised for AI agent development and platform expertise",
  },
  {
    icon: "🌸",
    title: "GSSoC Contributor & Ambassador",
    detail: "GirlScript Summer of Code · Open-source contributor and community representative",
  },
  {
    icon: "🔬",
    title: "Smart India Hackathon (SIH)",
    detail: "National-level government hackathon — Team selected for problem-statement round",
  },
];

const certifications = [
  {
    icon: "🏅",
    title: "Badge from Microsoft",
    issuer: "AI Skills Fest 2026",
  },
  {
    icon: "🎖️",
    title: "NPTEL — Joy of Computing using Python",
    issuer: "IIT Madras · Silver + Elite distinction",
  },
  {
    icon: "📜",
    title: "Cisco Certified — AI & Data Analytics",
    issuer: "Cisco Networking Academy · Applied AI, Modern AI, Data Analytics",
  },
  {
    icon: "📜",
    title: "Cisco Certified — C Programming Essentials",
    issuer: "Cisco Networking Academy · C Essentials 1 & 2",
  },
  {
    icon: "🤖",
    title: "AI Day 2.0 — Machine Learning",
    issuer: "ML Bhopal · Applied machine learning workshop certification",
  },
  {
    icon: "📱",
    title: "Android App Development",
    issuer: "Saksham Technology · End-to-end Android development programme",
  },
  {
    icon: "🎓",
    title: "BUILD WITH RAG MODEL",
    issuer: "Professional certification in RAG model development",
  },
];

export function Achievements() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -50px 0px" },
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,111,224,0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <p className="reveal section-eyebrow">Recognition</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-14"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Awards &amp; <span className="text-gradient">Credentials</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Competitive wins */}
          <div>
            <p
              className="reveal font-display font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "#00D4AA" }}
            >
              Competitive Recognition
            </p>
            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg, rgba(0,212,170,0.5), transparent)" }}
              />
              <div className="space-y-3 pl-12">
                {recognitions.map((a, i) => (
                  <div
                    key={a.title}
                    className="reveal relative"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div
                      className="timeline-dot absolute"
                      style={{
                        left: "-40px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#00D4AA",
                      }}
                    />
                    <div
                      className="rounded-xl px-4 py-3 transition-all duration-200 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(0,212,170,0.07)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(0,212,170,0.05)";
                        el.style.borderColor = "rgba(0,212,170,0.22)";
                        el.style.paddingLeft = "18px";
                        el.style.borderLeftWidth = "2px";
                        el.style.borderLeftColor = "#00D4AA";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.025)";
                        el.style.borderColor = "rgba(0,212,170,0.07)";
                        el.style.paddingLeft = "";
                        el.style.borderLeftWidth = "";
                        el.style.borderLeftColor = "";
                      }}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-base">{a.icon}</span>
                        <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                          {a.title}
                        </p>
                      </div>
                      <p className="text-xs pl-6" style={{ color: "var(--muted-foreground)" }}>
                        {a.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p
              className="reveal font-display font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "#7C6FE0" }}
            >
              Industry Certifications
            </p>
            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{
                  background: "linear-gradient(180deg, rgba(124,111,224,0.5), transparent)",
                }}
              />
              <div className="space-y-3 pl-12">
                {certifications.map((c, i) => (
                  <div
                    key={c.title}
                    className="reveal relative"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div
                      className="timeline-dot absolute"
                      style={{
                        left: "-40px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#7C6FE0",
                        boxShadow: "0 0 6px rgba(124,111,224,0.5)",
                      }}
                    />
                    <div
                      className="rounded-xl px-4 py-3 transition-all duration-200 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(124,111,224,0.07)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(124,111,224,0.05)";
                        el.style.borderColor = "rgba(124,111,224,0.22)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.025)";
                        el.style.borderColor = "rgba(124,111,224,0.07)";
                      }}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-base">{c.icon}</span>
                        <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                          {c.title}
                        </p>
                      </div>
                      <p className="text-xs pl-6" style={{ color: "var(--muted-foreground)" }}>
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
