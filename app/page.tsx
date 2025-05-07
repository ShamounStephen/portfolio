import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About />
      <RecentProjects/>
      <Skills />
      {/* <Experience/> */}
      <Approach/>
      <Contact />
    </div>
  );
}