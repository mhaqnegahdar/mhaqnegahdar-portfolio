import About from "@/components/layout/sections/About";
import Contact from "@/components/layout/sections/contact/Contact";
import Experience from "@/components/layout/sections/Experience";
import Hero from "@/components/layout/sections/Hero";
import Projects from "@/components/layout/sections/projects/Projects";
import SectionDivider from "@/components/layout/sections/SectionDivider";
import Skills from "@/components/layout/sections/Skills";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
