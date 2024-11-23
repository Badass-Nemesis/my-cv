import Bio from "@/sections/Bio";
import AboutMe from "@/sections/AboutMe";
import Footer from "@/sections/Footer";
import WorkExperience from "@/sections/WorkExperience";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import OpenSourceContributions from "@/sections/OpenSourceContributions";

export default function Home() {
  return (
    <>
      <div className="flex bg-yellow-500 h-auto p-10 justify-center">
        {/* Hello World */}
        <div className="text-black w-1/2">
          <Bio />
          <AboutMe />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <OpenSourceContributions />
          <Footer />
        </div>
      </div>
    </>
  );
}
