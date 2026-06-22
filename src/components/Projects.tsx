import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import portfolioImg from "@/assets/portfolio.png";
import indiaTravelImg from "@/assets/india-travel-explorer.png";
import foodDeliveryImg from "@/assets/food-delivery.png";
import pharmacyManagementImg from "@/assets/pharmacy-management.png";

const projects = [
  {
    title: "Personal Portfolio — v2",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description:
      "Engineered a high-performance portfolio with a custom design system: glassmorphism UI, JS-driven orbital animations, theme switching, and scroll-triggered reveals. Deployed via GitHub Actions CI/CD.",
    github: "https://github.com/Payal-goell/Payalgoel-portfolio.git",
    live: "https://payal-goell.github.io/Payalgoel-portfolio/",
    accentBar: "linear-gradient(90deg, #00D4AA, #7C6FE0)",
    image: portfolioImg,
    large: true,
  },
  {
    title: "India Travel Explorer",
    tags: ["Flutter", "Dart", "Material Design"],
    description:
      "Cross-platform mobile application delivering curated travel content for Indian destinations. Built with Flutter for smooth 60fps navigation, offline-first architecture, and an adaptive layout across screen sizes.",
    github: "https://github.com/Payal-goell/android-app-.git",
    live: null,
    accentBar: "linear-gradient(90deg, #F59E0B, #FCD34D)",
    image: indiaTravelImg,
    large: false,
  },
  {
    title: "TOMATO - Food Ordering Website",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
    description:
      "A full-stack food ordering website built using the MERN stack. Features stripe payment integration, JSON Web Token (JWT) authentication, and an interactive frontend for seamless customer experience.",
    github: "https://github.com/Payal-goell/FOOD_DELIVERY.git",
    live: null,
    accentBar: "linear-gradient(90deg, #EF4444, #F97316)",
    image: foodDeliveryImg,
    large: false,
  },
  {
    title: "Pharmacy Management System",
    tags: ["Python", "MySQL", "Tkinter", "GUI", "Database"],
    description:
      "Built a pharmacy inventory and customer management system with Python and MySQL, featuring customer record handling, CRUD operations, automated database creation, and both CLI and GUI interfaces. Improved usability through a Tkinter-based desktop application and structured data management.",
    github: "https://github.com/Payal-goell/Pharmaceutical_store_management_system.git",
    live: null,
    accentBar: "linear-gradient(90deg, #3B82F6, #06B6D4)",
    image: pharmacyManagementImg,
    large: false,
  }
];

export function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const [first, ...rest] = projects;

  return (
    <section
      id="projects"
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
        <p className="reveal section-eyebrow">Work</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-12"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Selected <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured large card */}
          <div
            className="reveal project-card md:col-span-2 flex flex-col sm:flex-row gap-6 p-7"
            style={{ animationDelay: "0ms" }}
          >
            <div
              className="project-accent-bar absolute top-0 left-0 right-0"
              style={{ background: first.accentBar }}
            />
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
              style={{ width: "100%", maxWidth: "180px", height: "130px" }}
            >
              {first.image && (
                <img
                  src={first.image}
                  alt={first.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {first.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: "rgba(0,212,170,0.08)",
                        border: "1px solid rgba(0,212,170,0.25)",
                        color: "#00D4AA",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {first.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {first.description}
                </p>
              </div>
              <div className="flex gap-5 mt-5">
                {first.live && (
                  <a
                    href={first.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "#00D4AA" }}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Site
                  </a>
                )}
                <a
                  href={first.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {rest.map((p, i) => (
            <div
              key={p.title}
              className="reveal project-card flex flex-col p-6"
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              <div
                className="project-accent-bar absolute top-0 left-0 right-0"
                style={{ background: p.accentBar }}
              />
              <div
                className="flex items-center justify-center rounded-xl mb-5 overflow-hidden border border-white/10"
                style={{ height: "140px" }}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3
                className="font-display font-bold text-xl mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                {p.description}
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "#00D4AA" }}
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
