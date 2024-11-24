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
      <div className="flex flex-col text-white h-auto p-10 justify-center items-center overflow-y-auto">
        {/* Hello World */}
        <div className="w-1/2 rounded-xl overflow-hidden">
          <Bio />
          <AboutMe />
          {/* <WorkExperience /> */}
          <Education />
          <Skills />
          <Projects />
          {/* <OpenSourceContributions /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
