import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

import "./App.css";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [activeIdx, setActiveIdx] = useState<number | null>(1);

  return (
    <div>
      <NavBar />
      <About activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
      <Experience activeIdx={activeIdx} />
      <div>
        <h2>Skills and Interests</h2>

      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
