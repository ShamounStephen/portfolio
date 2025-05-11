import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
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