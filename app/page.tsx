import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import RecentProjects from "@/components/RecentProjects";


export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <RecentProjects/>
      <Experience/>
      <Approach/>
      <Contact />
    </div>
  );
}