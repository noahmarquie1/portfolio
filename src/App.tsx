import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SectionNav from "./components/SectionNav";


function App() {
  return (
    <div>
      <SectionNav />
      <div className="page">
        <About />
        <Experience />
        <Education />
      </div>
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
