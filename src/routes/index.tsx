import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Payal Goel | CSE-AI & DS Developer" },
      {
        name: "description",
        content:
          "Portfolio of Payal Goel — B.Tech CSE (AI & Data Science) at SISTec Bhopal. Web Dev Lead at GDG, NPTEL Silver+Elite, GSSoC Ambassador.",
      },
      { property: "og:title", content: "Payal Goel | CSE-AI & DS Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Payal Goel — Python developer, Android dev & AI/DS student building real-world solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
