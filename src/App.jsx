import { portfolio } from "./data/portfolio.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white selection:bg-[#8ab4ff]/30 selection:text-white">
      <Header data={portfolio} />
      
      <main className="overflow-hidden">
        <Hero data={portfolio} />
        <About data={portfolio} />
        <Experience data={portfolio} />
        <Projects data={portfolio} />
        <Skills data={portfolio} />
        <Education data={portfolio} />
        <Achievements data={portfolio} />
        <Contact data={portfolio} />
      </main>

      {/* Updated to pass the whole portfolio object to match our new Footer component */}
      <Footer data={portfolio} />
    </div>
  )
}