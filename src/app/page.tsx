import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Awards from '@/components/sections/awards';
import Chpe from '@/components/sections/chpe';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import { getChpeAssignments } from '@/lib/chpe-assignments';

export default function Home() {
  const chpeAssignments = getChpeAssignments();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Awards />
        <Chpe assignments={chpeAssignments} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
