import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";
import resumePdf from "@/assets/Payal_Goel_CV.pdf";

/* ─── Typewriter ────────────────────────────────────────────── */
const phrases = [
  "Full-Stack Web Developer",
  "Data Science Practitioner",
  "Android App Developer",
  "Community Tech Leader",
  "AI & Data Science Engineer",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="cursor-blink" style={{ color: "#00D4AA", fontWeight: 600 }}>
      {text}
    </span>
  );
}

/* ─── Orbital badges — JS-driven so text NEVER flips ───────── */
const outerBadges = [
  { label: "Python", icon: "🐍" },
  { label: "C++", icon: "⚙️" },
  { label: "Power BI", icon: "📊" },
  { label: "Android", icon: "📱" },
  { label: "AI", icon: "🤖" },
];

const OUTER_R = 210; // radius in px (half of 420px ring)
const INNER_R = 170; // radius in px (half of 340px ring)

function OrbitRing() {
  // angle state in radians — updated every frame
  const outerAngleRef = useRef(0);
  const innerAngleRef = useRef(0);
  const rafRef = useRef<number>(0);

  // refs to each badge element
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) return;

    const OUTER_SPEED = (2 * Math.PI) / (18 * 60); // full rotation in 18s @ 60fps
    const INNER_SPEED = (2 * Math.PI) / (10 * 60); // full rotation in 10s @ 60fps

    // Space badges evenly
    const badgeOffsets = outerBadges.map((_, i) => (i / outerBadges.length) * 2 * Math.PI);
    const dotOffsets = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

    const tick = () => {
      outerAngleRef.current += OUTER_SPEED;
      innerAngleRef.current -= INNER_SPEED; // CCW

      // Position outer badges
      badgeRefs.current.forEach((el, i) => {
        if (!el) return;
        const a = outerAngleRef.current + badgeOffsets[i];
        const x = Math.cos(a) * OUTER_R;
        const y = Math.sin(a) * OUTER_R;
        // translate to center of container (210px, 210px) then offset by badge half-width
        el.style.left = `${210 + x}px`;
        el.style.top = `${210 + y}px`;
        // badges always upright — NO rotation applied
      });

      // Position inner dots
      dotRefs.current.forEach((el, i) => {
        if (!el) return;
        const a = innerAngleRef.current + dotOffsets[i];
        const x = Math.cos(a) * INNER_R;
        const y = Math.sin(a) * INNER_R;
        el.style.left = `${170 + x}px`;
        el.style.top = `${170 + y}px`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [prefersReduced]);

  return (
    <>
      {/* Outer ring — visual only */}
      <div
        className="orbit-outer-ring absolute rounded-full pointer-events-none"
        style={{
          width: "420px",
          height: "420px",
          border: "1.5px dashed rgba(0,212,170,0.25)",
          left: "50%",
          top: "50%",
          marginLeft: "-210px",
          marginTop: "-210px",
        }}
      />

      {/* Inner ring — visual only */}
      <div
        className="orbit-inner-ring absolute rounded-full pointer-events-none"
        style={{
          width: "340px",
          height: "340px",
          border: "1px solid rgba(124,111,224,0.2)",
          left: "50%",
          top: "50%",
          marginLeft: "-170px",
          marginTop: "-170px",
        }}
      />

      {/* Outer badges — positioned absolutely within a 420×420 container */}
      <div
        className="absolute pointer-events-none orbit-outer-ring"
        style={{
          width: "420px",
          height: "420px",
          left: "50%",
          top: "50%",
          marginLeft: "-210px",
          marginTop: "-210px",
          // Override the CSS rotation animation on this layer since we use JS
          animation: "none",
          border: "none",
        }}
      >
        {outerBadges.map((badge, i) => (
          <div
            key={badge.label}
            ref={(el) => {
              badgeRefs.current[i] = el;
            }}
            className="absolute"
            style={{
              // Initial position — JS will override each frame
              left: `${210 + Math.cos((i / outerBadges.length) * 2 * Math.PI) * OUTER_R}px`,
              top: `${210 + Math.sin((i / outerBadges.length) * 2 * Math.PI) * OUTER_R}px`,
              transform: "translate(-50%, -50%)",
              background: "var(--surface, rgba(10,15,28,0.9))",
              border: "1px solid rgba(0,212,170,0.5)",
              borderRadius: "999px",
              padding: "4px 10px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#00D4AA",
              whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {badge.icon} {badge.label}
          </div>
        ))}
      </div>

      {/* Inner dots — positioned absolutely within a 340×340 container */}
      <div
        className="absolute pointer-events-none orbit-inner-ring"
        style={{
          width: "340px",
          height: "340px",
          left: "50%",
          top: "50%",
          marginLeft: "-170px",
          marginTop: "-170px",
          animation: "none",
          border: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            className="absolute"
            style={{
              left: `${170 + Math.cos((i / 3) * 2 * Math.PI) * INNER_R}px`,
              top: `${170 + Math.sin((i / 3) * 2 * Math.PI) * INNER_R}px`,
              transform: "translate(-50%, -50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00D4AA",
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </>
  );
}

/* ─── Scroll-progress bar ───────────────────────────────────── */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{ transformOrigin: "left", transform: "scaleX(0)", width: "100%" }}
    />
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <ScrollProgress />
      <section
        id="top"
        className="grain relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Background blobs */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="hero-blob absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #00D4AA, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(circle, #7C6FE0, transparent 70%)",
              animation: "float-blob 18s ease-in-out infinite reverse",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 w-full grid lg:grid-cols-5 gap-12 lg:gap-6 items-center">
          {/* ── LEFT TEXT COLUMN ── */}
          <div className="lg:col-span-3 flex flex-col items-start">
            {/* Availability badge */}
            <div
              className="hero-badge glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              style={{ borderColor: "rgba(0,212,170,0.3)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#4ade80",
                  boxShadow: "0 0 6px #4ade80",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for Internships &amp; Collaborations
            </div>

            {/* Name */}
            <p className="hero-hi mt-7 text-lg" style={{ color: "var(--muted-foreground)" }}>
              Hi, I'm
            </p>
            <h1
              className="hero-name text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="text-gradient">Payal Goel</span>
            </h1>

            {/* Typewriter */}
            <h2
              className="hero-typewriter mt-3 text-xl sm:text-2xl font-display font-semibold min-h-[2.2rem]"
              style={{ color: "var(--foreground)" }}
            >
              <Typewriter />
            </h2>

            {/* Bio — outcome-focused, professional */}
            <p
              className="hero-bio mt-5 max-w-xl leading-relaxed text-base"
              style={{ color: "var(--muted-foreground)" }}
            >
              Software developer with a focus on AI, data, and scalable web experiences. I lead
              engineering initiatives at{" "}
              <span style={{ color: "#00D4AA", fontWeight: 500 }}>GDG on Campus</span> and{" "}
              <span style={{ color: "#7C6FE0", fontWeight: 500 }}>IEEE</span>, ship real products
              across web and mobile, and contribute to open-source. I care about writing clean code
              and building things people actually use.
            </p>

            {/* CTAs */}
            <div className="hero-ctas mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="shimmer inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold glow-teal transition-all hover:scale-105"
                style={{ background: "#00D4AA", color: "var(--primary-foreground)" }}
              >
                View My Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={resumePdf}
                download="Payal_Goel_CV.pdf"
                className="shimmer inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all hover:scale-105"
                style={{
                  border: "1.5px solid rgba(0,212,170,0.5)",
                  color: "#00D4AA",
                  background: "transparent",
                }}
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="hero-socials mt-7 flex items-center gap-3">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/payal-goel-81b6a7339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  label: "LinkedIn",
                },
                { Icon: Github, href: "https://github.com/Payal-goell", label: "GitHub" },
                { Icon: Mail, href: "mailto:payalgoel2006@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full glass flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{ color: "var(--muted-foreground)", borderColor: "rgba(0,212,170,0.2)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#00D4AA";
                    el.style.borderColor = "rgba(0,212,170,0.6)";
                    el.style.boxShadow = "0 0 16px rgba(0,212,170,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--muted-foreground)";
                    el.style.borderColor = "rgba(0,212,170,0.2)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT PHOTO COLUMN ── */}
          <div
            className="hero-photo-col lg:col-span-2 relative flex items-center justify-center"
            style={{ minHeight: "480px" }}
          >
            {/* Radial glow behind photo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "380px",
                height: "380px",
                background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* JS-driven orbit rings + badges */}
            <OrbitRing />

            {/* Floating achievement cards */}
            <div
              className="float-card glass-card absolute pointer-events-none"
              style={{ top: "52px", right: "0px", zIndex: 10 }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#00D4AA",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                🌐 GDG Web Dev Lead
              </span>
            </div>
            <div
              className="float-card glass-card absolute pointer-events-none"
              style={{ bottom: "64px", left: "0px", zIndex: 10, animationDelay: "1.5s" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#7C6FE0",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                📡 IEEE Webmaster
              </span>
            </div>

            {/* Profile picture */}
            <div
              className="relative z-10 hero-orbit-container"
              style={{
                width: "300px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imgError ? (
                <div className="profile-initials" aria-label="Payal Goel">
                  PG
                </div>
              ) : (
                <img
                  src={profileImg}
                  alt="Payal Goel"
                  className="profile-photo"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
