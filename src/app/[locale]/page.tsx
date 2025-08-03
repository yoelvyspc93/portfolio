import { featureFlags } from '@/constants/featureFlags';

import { About } from '@/components/sections/home/About';
import { Contact } from '@/components/sections/home/Contact';
import { Experience } from '@/components/sections/home/Experience';
import { Header } from '@/components/sections/home/Header';
import { Projects } from '@/components/sections/home/Projects';
import { Skills } from '@/components/sections/home/Skills';

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
