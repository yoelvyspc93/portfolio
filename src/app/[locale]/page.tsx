import { featureFlags } from '@/constants/featureFlags';

import { About } from '@/components/sections/home2/About';
import { Contact } from '@/components/sections/home2/Contact';
import { Experience } from '@/components/sections/home2/Experience';
import { Projects } from '@/components/sections/home2/Projects';
import { Skills } from '@/components/sections/home2/Skills';
import { Header } from '@/components/sections/home/Header';

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
