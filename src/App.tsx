import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import "./themes.css";
import NavBar from "./components/NavBar";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const THEMES = [
  { id: "minimal", label: "1. Minimal", note: "Plain, single-column, alisawuffles-inspired. Logos in clean white circles." },
  { id: "editorial", label: "2. Editorial", note: "Serif, ruled, newspaper-like. Logos in grayscale, square frames." },
  { id: "dark", label: "3. Dark", note: "Midnight background, light text. Logos on dark circles." },
  { id: "terminal", label: "4. Terminal", note: "Monospace, green on black. Logos tinted monochrome green." },
  { id: "warm", label: "5. Warm Paper", note: "Cream paper, brown serif text. Logos in soft, rounded, sepia frames." },
  { id: "brutalist", label: "6. Brutalist", note: "Thick black borders, hard shadows, red accent. Logos in square, shadowed frames." },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

function App() {
  const [theme, setTheme] = useState<ThemeId>("minimal");

  return (
    <div className={`minimal-layout theme-${theme}`} style={{ fontFamily: "var(--font)" }}>
      <div className="design-switcher">
        <h2>Design options</h2>
        <p>Pick a whole-site look below. The timeline style inside Experience can still be switched separately — 6 site themes × 3 timeline styles.</p>
        <div className="design-buttons" role="group" aria-label="Site design">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={theme === t.id ? "design-button selected" : "design-button"}
              onClick={() => setTheme(t.id)}
              aria-pressed={theme === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p>{THEMES.find((t) => t.id === theme)?.note}</p>
      </div>
      <NavBar />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
