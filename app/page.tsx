import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}