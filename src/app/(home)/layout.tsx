import { ReactNode } from 'react';

import { About } from '@/components/sections/home/About';
import { Contact } from '@/components/sections/home/Contact';
import { Experience } from '@/components/sections/home/Experience';
import { Header } from '@/components/sections/home/Header';
import { Projects } from '@/components/sections/home/Projects';
import { Skills } from '@/components/sections/home/Skills';

export default function HomeLayout({
  modal,
}: Readonly<{
  modal: ReactNode;
}>) {
  return (
    <main id="main">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      {modal}
    </main>
  );
}
