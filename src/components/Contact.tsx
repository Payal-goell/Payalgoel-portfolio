import { useEffect, useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const methods = [
  {
    Icon: Mail,
    label: "Email",
    value: "payalgoel2006@gmail.com",
    href: "mailto:payalgoel2006@gmail.com",
    accent: "#00D4AA",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/payalgoel",
    href: "https://www.linkedin.com/in/payal-goel-81b6a7339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    accent: "#0A66C2",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Payalgoel-coder",
    href: "https://github.com/Payal-goell",
    accent: "#7C6FE0",
  },
];

export function Contact() {
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
      id="contact"
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.3), transparent)" }}
      />

      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,212,170,0.04) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <p className="reveal section-eyebrow">Contact</p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl mb-4"
          style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Let's work{" "}
          <span className="text-gradient">together.</span>
        </h2>
        <p
          className="reveal text-base mb-12 max-w-lg mx-auto"
          style={{ color: "var(--muted-foreground)" }}
        >
          I'm open to full-time roles, freelance engagements, and technical collaborations.
          If you have a project or opportunity worth discussing, I'd like to hear about it.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {methods.map((m, i) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="reveal rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,212,170,0.13)",
                animationDelay: `${i * 100}ms`,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${m.accent}55`;
                el.style.boxShadow = `0 0 28px ${m.accent}18`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(0,212,170,0.13)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${m.accent}16`, color: m.accent }}
              >
                <m.Icon className="w-5 h-5" />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted-foreground)" }}
              >
                {m.label}
              </span>
              <span
                className="text-sm font-medium text-center break-all"
                style={{ color: "var(--foreground)" }}
              >
                {m.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
