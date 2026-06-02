import React, { useState, useEffect } from "react";
import "./About.css";
import profileImage from "../assets/profile.jpg";
import ubcLogo from "../assets/ubc-logo.png";
import accessiwayLogo from "../assets/accessiway.png";
import transmutexLogo from "../assets/transmutex.png";
import uroLogo from "../assets/ubc_uro.png";
import mathLogo from "../assets/math.png";

import americanFootball from "../assets/albums/american_football.jpg";
import backseatLovers from "../assets/albums/backseat_lovers.jpg";
import grace from "../assets/albums/grace.jpg";
import johnMayer from "../assets/albums/john_mayer_la.jpeg";
import redClay from "../assets/albums/red_clay.jpg";
import rubberSoul from "../assets/albums/rubber_soul.png";
import monthPhoto from "../assets/month_photo.jpg";

// ── Git Contribution Chart ──────────────────────────────────────────────────
const GITHUB_USERNAME = "noahmarquie1";

const DAYS = 32;

interface ContribDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GitContrib: React.FC = () => {
  const [cells, setCells] = useState<ContribDay[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");

  useEffect(() => {
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${new Date().getFullYear()}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json() as Promise<{ contributions: ContribDay[] }>;
      })
      .then(({ contributions }) => {
        const today = new Date().toISOString().slice(0, 10);
        const past = contributions.filter((d) => d.date <= today);
        setCells(past.slice(-DAYS));
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <>
      <p className="git-contrib-title">Git Contributions</p>

      {/* Loading: show faded placeholder grid */}
      {status === "loading" && (
        <div className="git-contrib-grid git-contrib-loading">
          {Array.from({ length: DAYS }).map((_, i) => (
            <div key={i} className="contrib-cell level-0" />
          ))}
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="git-contrib-status">Unavailable</div>
      )}

      {/* Live data */}
      {status === "done" && (
        <div className="git-contrib-grid">
          {cells.map((day, i) => (
            <div
              key={i}
              className={`contrib-cell level-${day.level}`}
              title={`${day.date}: ${day.count} contribution${
                day.count !== 1 ? "s" : ""
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

// ── Music Carousel ──────────────────────────────────────────────────
// Import your album art and fill in the src fields:
// import album1 from "../assets/albums/album1.jpg";

interface Album {
  title: string;
  artist: string;
  src: string;
}

const ALBUMS: Album[] = [
  {
    title: "American Football",
    artist: "American Football",
    src: americanFootball,
  },
  {
    title: "When We Were Friends",
    artist: "The Backseat Lovers",
    src: backseatLovers,
  },
  {
    title: "Grace",
    artist: "Jeff Buckley",
    src: grace,
  },
  {
    title: "Where the Light Is: Live in LA",
    artist: "John Mayer",
    src: johnMayer,
  },
  {
    title: "Red Clay",
    artist: "Freddie Hubbard",
    src: redClay,
  },
  {
    title: "Rubber Soul",
    artist: "The Beatles",
    src: rubberSoul,
  },
];

function albumStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  if (abs > 1) {
    return {
      opacity: 0,
      pointerEvents: "none",
      zIndex: 0,
      transform: "translateX(-50%) translateY(-50%) scale(0)",
    };
  }
  const txExpr =
    offset === 0
      ? "-50%"
      : `calc(-50% ${offset < 0 ? "-" : "+"} var(--music-tx))`;
  const sc = abs === 0 ? 1 : 0.7;
  const op = abs === 0 ? 1 : 0.6;
  return {
    transform: `translateX(${txExpr}) translateY(-50%) scale(${sc})`,
    opacity: op,
    zIndex: abs === 0 ? 3 : 1,
    pointerEvents: "none",
  };
}

const MusicCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + ALBUMS.length) % ALBUMS.length);
  const next = () => setCurrent((c) => (c + 1) % ALBUMS.length);

  return (
    <>
      <p className="music-title">Recent Listens</p>
      <p className="music-artist">{ALBUMS[current].artist}</p>
      <div className="music-stage">
        <button className="music-prev" onClick={prev}>
          &#8249;
        </button>
        <button className="music-next" onClick={next}>
          &#8250;
        </button>
        {ALBUMS.map((album, i) => {
          const raw = (i - current + ALBUMS.length) % ALBUMS.length;
          const offset = raw > ALBUMS.length / 2 ? raw - ALBUMS.length : raw;
          return (
            <div key={i} className="music-album" style={albumStyle(offset)}>
              {album.src ? (
                <img
                  src={album.src}
                  alt={`${album.title} by ${album.artist}`}
                />
              ) : (
                <div className="music-album-placeholder" />
              )}
            </div>
          );
        })}
      </div>
      <p className="music-album-name">{ALBUMS[current].title}</p>
    </>
  );
};

export const About: React.FC<{
  activeIdx: number | null;
  setActiveIdx: (idx: number | null) => void;
}> = ({ activeIdx, setActiveIdx }) => {
  return (
    <section id="about" className="about-container">
      <div className="about-grid">
        <div className="about-left-column">
          <div className="about-rect about-rect-1 profile-wrapper">
            <img src={profileImage} alt="Noah" className="hero-image" />
            <div className="profile-text">
              <h2>Hi, my name is Noah</h2>
              <p>
                Building machine learning systems grounded in mathematical
                rigor.
              </p>
            </div>
          </div>
          <div className="about-rect about-rect-2">
            <div className="timeline-buttons">
              {[
                {
                  title: "Software Engineering",
                  logo: accessiwayLogo,
                  alt: "AccessiWay",
                },
                {
                  title: "ML for Nuclear",
                  logo: transmutexLogo,
                  alt: "Transmutex",
                },
                { title: "ML for Genomics", logo: uroLogo, alt: "URO" },
                {
                  title: "Scientific Computing",
                  logo: mathLogo,
                  alt: "UBC Mathematics",
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className={`timeline-box ${activeIdx === idx ? "selected" : ""}`}
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                >
                  <h2>{exp.title}</h2>
                  <img src={exp.logo} alt={exp.alt} />
                </div>
              ))}
            </div>
            <div className="timeline-bottom"></div>
          </div>
        </div>
        <div className="about-right-column">
          <div className="about-rect about-rect-3">
            <h2>About Me</h2>
            <div className="education-box">
              <div className="education-logo">
                <img src={ubcLogo} alt="UBC Logo" />
              </div>
              <div className="education-info">
                <h3 className="education-title">
                  The University of British Columbia
                </h3>
                <p className="education-major">
                  Combined Major in Computer Science and Mathematics
                </p>
              </div>
            </div>
            <div className="education-highlights">
              <p>Recent Coursework:</p>
              <ul>
                <li>MATH 215: Elementary Differential Equations</li>
                <li>CPSC 221: Basic Algorithms and Data Structures</li>
                <li>PHIL 321: Induction, Decision, and Game Theory</li>
              </ul>
            </div>
            <div className="spotlight">
              <div className="git-contrib">
                <GitContrib />
              </div>
              <div className="music">
                <MusicCarousel />
              </div>
              <div className="photo">
                <p className="photo-title">Photo of the Month</p>
                <div className="photo-frame">
                  <div className="photo-placeholder">
                    <img src={monthPhoto} alt="Photo of the Month" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
