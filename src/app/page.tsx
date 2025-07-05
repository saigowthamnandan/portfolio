import Hero from '@/components/Hero';
import ContentBgParticles from '@/components/Content-bgParticles';
import About from '@/components/About';
import Dock from '@/components/Dock';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <Hero />
      <div className="flex flex-col gap-12 w-full h-full relative top-3/4 left-0">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <ContentBgParticles />
      </div>
      <Dock />
    </div>
  );
}
