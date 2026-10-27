import React, { useState, useEffect } from "react";
import "./About.css";
import profileImage from "../assets/profile.jpg";
import ubcLogo from "../assets/ubc-logo.png";

import americanFootball from "../assets/albums/american_football.jpg";
import backseatLovers from "../assets/albums/backseat_lovers.jpg";
import grace from "../assets/albums/grace.jpg";
import johnMayer from "../assets/albums/john_mayer_la.jpeg";
import redClay from "../assets/albums/red_clay.jpg";
import rubberSoul from "../assets/albums/rubber_soul.png";
import monthPhoto from "../assets/month_photo.jpg";

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
      {status === "loading" && (
        <div className="git-contrib-grid git-contrib-loading">
          {Array.from({ length: DAYS }).map((_, i) => (
            <div key={i} className="contrib-cell level-0" />
          ))}
        </div>
      )}
      {status === "error" && <div className="git-contrib-status">Unavailable</div>}
      {status === "done" && (
        <div className="git-contrib-grid">
          {cells.map((day, i) => (
            <div
              key={i}
              className={`contrib-cell level-${day.level}`}
              title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

interface Album {
  title: string;
  artist: string;
  src: string;
}

const ALBUMS: Album[] = [
  { title: "American Football", artist: "American Football", src: americanFootball },
  { title: "When We Were Friends", artist: "The Backseat Lovers", src: backseatLovers },
  { title: "Grace", artist: "Jeff Buckley", src: grace },
  { title: "Where the Light Is: Live in LA", artist: "John Mayer", src: johnMayer },
  { title: "Red Clay", artist: "Freddie Hubbard", src: redClay },
  { title: "Rubber Soul", artist: "The Beatles", src: rubberSoul },
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
                <img src={album.src} alt={`${album.title} by ${album.artist}`} />
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

export const About: React.FC = () => {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

  return (
    <>
      <section id="about" className="about-minimal">
        <img src={profileImage} alt="Noah" className="about-minimal-photo" />
        <h2>Hi, my name is Noah</h2>
        <p>Building machine learning systems grounded in mathematical rigor.</p>

        <h2>About Me</h2>
        <div className="education-box">
          <div className="education-logo">
            <img src={ubcLogo} alt="UBC Logo" />
          </div>
          <div className="education-info">
            <h3 className="education-title">The University of British Columbia</h3>
            <p className="education-major">
              B.Sc. Combined Honours in Computer Science and Mathematics
            </p>
          </div>
        </div>

        <div className="recent-highlights">
          <p>Recent Highlights:</p>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/noahmarquie1/mosaic">
                MOSAIC
              </a>{" "}
              — Combinatorial Learning for Cell-Type Deconvolution
            </li>
            <li>
              <a target="_blank" href="https://github.com/noahmarquie1/dendrite">
                Dendrite
              </a>{" "}
              — Physical Optimization for Numerical Multiphase Flow
            </li>
            <li>
              <a target="_blank" href="https://github.com/noahmarquie1/sfr_optimizer">
                SFR Optimizer
              </a>{" "}
              — Bayesian Optimization and RL for Nuclear
            </li>
          </ul>
        </div>

        <div className="git-contrib">
          <GitContrib />
        </div>
        <div className="music">
          <MusicCarousel />
        </div>
        <div className="photo">
          <p className="photo-title">Photo of the Month</p>
          <div className="photo-frame">
            <div
              className="photo-placeholder"
              onClick={() => setIsPhotoExpanded(true)}
            >
              <img src={monthPhoto} alt="Photo of the Month" />
            </div>
          </div>
        </div>
      </section>

      {isPhotoExpanded && (
        <div className="photo-modal-overlay" onClick={() => setIsPhotoExpanded(false)}>
          <div className="photo-modal">
            <img src={monthPhoto} alt="Photo of the Month - Expanded" />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
