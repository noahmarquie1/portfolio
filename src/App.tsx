import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import NavBar from "./components/NavBar";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="minimal-layout">
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
