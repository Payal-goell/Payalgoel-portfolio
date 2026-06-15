import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    accent: "teal",
    description: "Core languages across systems, web, and data domains",
    skills: [
      { name: "Python",     icon: "🐍" },
      { name: "JavaScript", icon: "⚡" },
      { name: "C++",        icon: "⚙️" },
      { name: "C",          icon: "🔩" },
      { name: "Dart",       icon: "🎯" },
      { name: "SQL",        icon: "🗄️" },
      { name: "HTML / CSS", icon: "🌐" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "teal",
    description: "Tools I use to ship faster and smarter",
    skills: [
      { name: "Flutter",  icon: "🐦" },
      { name: "Pandas",   icon: "🐼" },
      { name: "NumPy",    icon: "🔢" },
    ],
  },
  {
    title: "Platforms & Tools",
    accent: "purple",
    description: "Environments, visualisation, and dev tooling",
    skills: [
      { name: "Power BI",       icon: "📊" },
      { name: "Android Studio", icon: "📱" },
      { name: "VS Code",        icon: "💻" },
      { name: "Google Colab",   icon: "☁️" },
      { name: "RStudio",        icon: "📐" },
      { name: "Excel",          icon: "📈" },
    ],
  },
  {
    title: "Competencies",
    accent: "purple",
    description: "Professional strengths I bring to every project",
    skills: [
      { name: "System Design",     icon: "🏗️" },
      { name: "Data Analysis",     icon: "📉" },
      { name: "Technical Writing", icon: "✍️" },
      { name: "Team Leadership",   icon: "🎯" },
    ],
  },
];

export function Skills() {
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
      id="skills"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,111,224,0.3), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        <p className="reveal section-eyebrow">Expertise</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-12"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Technical{" "}
          <span className="text-gradient">Stack</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="reveal glass rounded-2xl p-6"
              style={{
                animationDelay: `${gi * 100}ms`,
                borderColor: group.accent === "purple"
                  ? "rgba(124,111,224,0.2)"
                  : "rgba(0,212,170,0.15)",
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="h-1 w-5 rounded-full mt-2 flex-shrink-0"
                  style={{
                    background: group.accent === "purple"
                      ? "linear-gradient(90deg,#7C6FE0,#B8A9FF)"
                      : "linear-gradient(90deg,#00D4AA,#7DF9D9)",
                  }}
                />
                <div>
                  <h3
                    className="font-display font-semibold text-sm uppercase tracking-wider"
                    style={{ color: group.accent === "purple" ? "#7C6FE0" : "#00D4AA" }}
                  >
                    {group.title}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-pill ${group.accent === "purple" ? "skill-pill-purple" : ""}`}
                  >
                    <span role="img" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
