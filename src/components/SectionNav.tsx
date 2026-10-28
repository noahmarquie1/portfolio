import React, { useEffect, useRef, useState } from "react";
import "./SectionNav.css";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Get in Touch" },
] as const;

const HEADER_GAP = 16;

type SectionId = (typeof SECTIONS)[number]["id"];

export const SectionNav: React.FC = () => {
  const [activeId, setActiveId] = useState<SectionId>(SECTIONS[0].id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.28;
      let current: SectionId = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveId(current);

      const nav = navRef.current;
      const header = document.getElementById("about");
      if (!nav || !header) return;

      const navHeight = nav.offsetHeight;
      const preferredTop = window.innerHeight / 2;
      const headerBottom = header.getBoundingClientRect().bottom;
      const minTop = headerBottom + HEADER_GAP + navHeight / 2;
      const top = Math.max(preferredTop, minTop);

      nav.style.top = `${top}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveId(id);
  };

  return (
    <nav
      ref={navRef}
      className="section-nav"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`section-nav-item${activeId === id ? " active" : ""}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
          aria-current={activeId === id ? "true" : undefined}
        >
          <span className="section-nav-label">{label}</span>
          <span className="section-nav-bar" />
        </button>
      ))}
    </nav>
  );
};

export default SectionNav;
