import { featureFlags } from '@/constants/featureFlags';

import { Contact } from '@/components/sections/home2/Contact';
import { Experience } from '@/components/sections/home2/Experience';
import { Skills } from '@/components/sections/home2/Skills';

import { Header } from '@/components/sections/home/Header';
import { About } from '@/components/sections/home/About';
import { Projects } from '@/components/sections/home/Projects';

export default function HomePage() {
  return (
    <main id="main">
      {featureFlags.showHeader && <Header />}
      {featureFlags.showAbout && <About />}
      {featureFlags.showProjects && <Projects />}
      {featureFlags.showExperience && <Experience />}
      {featureFlags.showSkills && <Skills />}
      {featureFlags.showContact && <Contact />}
    </main>
  );
}
