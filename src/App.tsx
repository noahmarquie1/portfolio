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
      <About />
      <div className="content">
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
