import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className="relative py-8 px-4"
      style={{
        background: "var(--background)",
        borderTop: "1px solid rgba(0,212,170,0.1)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.4), rgba(124,111,224,0.3), transparent)" }}
      />

      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Designed &amp; Built by{" "}
          <span className="font-semibold" style={{ color: "#00D4AA" }}>
            Payal Goel
          </span>{" "}
          · 2025
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/in/payalgoel", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com/Payalgoel-coder", label: "GitHub" },
            { Icon: Mail, href: "mailto:payalgoel2006@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,212,170,0.2)",
                color: "var(--muted-foreground)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#00D4AA";
                el.style.borderColor = "rgba(0,212,170,0.5)";
                el.style.boxShadow = "0 0 12px rgba(0,212,170,0.25)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--muted-foreground)";
                el.style.borderColor = "rgba(0,212,170,0.2)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #00D4AA, #7DF9D9)",
            color: "var(--primary-foreground)",
            boxShadow: "0 0 20px rgba(0,212,170,0.4)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
