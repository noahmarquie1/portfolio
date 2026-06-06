import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeIdx, setActiveIdx] = useState<number | null>(1);

  return (
    <div>
      <NavBar />
      <About activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
      <Experience activeIdx={activeIdx} />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
